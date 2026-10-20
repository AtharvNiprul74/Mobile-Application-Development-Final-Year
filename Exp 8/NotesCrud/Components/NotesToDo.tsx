import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

const STORAGE_KEY = "TODOS_V2";

export default function TodoScreen() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    async function loadTodos() {
      try {
        const storedTodos = await AsyncStorage.getItem(STORAGE_KEY);

        if (storedTodos !== null) {
          setTodos(JSON.parse(storedTodos) as Todo[]);
        }
      } catch (error) {
        console.warn("Could not read saved tasks", error);
      }
    }

    loadTodos();
  }, []);

  const persist = async (updatedTodos: Todo[]) => {
    setTodos(updatedTodos);

    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTodos));
    } catch (error) {
      console.warn("Could not persist tasks", error);
    }
  };

  const submitTask = async () => {
    const title = task.trim();

    if (!title) {
      Alert.alert("Missing task", "Please type a task.");
      return;
    }

    let updatedTodos: Todo[];

    if (editingId !== null) {
      updatedTodos = todos.map((todo) =>
        todo.id === editingId ? { ...todo, title } : todo
      );
    } else {
      updatedTodos = [
        ...todos,
        {
          id: `${Date.now()}-${Math.random()}`,
          title,
          completed: false,
        },
      ];
    }

    await persist(updatedTodos);
    setTask("");
    setEditingId(null);
  };

  const toggleCompleted = async (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    await persist(updatedTodos);
  };

  const beginEdit = (todo: Todo) => {
    setTask(todo.title);
    setEditingId(todo.id);
  };

  const deleteTask = async (id: string) => {
    await persist(todos.filter((todo) => todo.id !== id));

    if (editingId === id) {
      setEditingId(null);
      setTask("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tasks</Text>
      <Text style={styles.subheading}>
        {todos.filter((todo) => !todo.completed).length} remaining
      </Text>

      <View style={styles.entry}>
        <TextInput
          style={styles.input}
          placeholder="What needs doing?"
          value={task}
          onChangeText={setTask}
        />

        <Pressable style={styles.addButton} onPress={submitTask}>
          <Text style={styles.addButtonText}>
            {editingId ? "Save" : "Add"}
          </Text>
        </Pressable>
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.empty}>Your list is empty. Add a task!</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Pressable
              style={styles.taskArea}
              onPress={() => toggleCompleted(item.id)}
            >
              <Text style={styles.check}>{item.completed ? "☑" : "□"}</Text>
              <Text
                style={[
                  styles.taskTitle,
                  item.completed && styles.completed,
                ]}
              >
                {item.title}
              </Text>
            </Pressable>

            <View style={styles.actions}>
              <Pressable onPress={() => beginEdit(item)}>
                <Text style={styles.edit}>Edit</Text>
              </Pressable>

              <Pressable onPress={() => deleteTask(item.id)}>
                <Text style={styles.delete}>Delete</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: "#F4F6FA",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#20243A",
  },
  subheading: {
    color: "#777D91",
    marginTop: 4,
    marginBottom: 18,
  },
  entry: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 14,
  },
  input: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#E0E3EB",
  },
  addButton: {
    backgroundColor: "#4657D6",
    paddingHorizontal: 18,
    justifyContent: "center",
    borderRadius: 10,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  list: {
    paddingBottom: 16,
    gap: 10,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 14,
    elevation: 1,
  },
  taskArea: {
    flexDirection: "row",
    alignItems: "center",
  },
  check: {
    fontSize: 22,
    marginRight: 10,
    color: "#4657D6",
  },
  taskTitle: {
    flex: 1,
    fontSize: 16,
    color: "#20243A",
  },
  completed: {
    textDecorationLine: "line-through",
    color: "#9297A5",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 18,
    marginTop: 12,
  },
  edit: {
    color: "#4657D6",
    fontWeight: "600",
  },
  delete: {
    color: "#C0392B",
    fontWeight: "600",
  },
  empty: {
    textAlign: "center",
    color: "#7B8192",
    marginTop: 24,
  },
});
