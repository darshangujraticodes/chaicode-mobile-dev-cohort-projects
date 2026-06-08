import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Pressable,
  TextInput,
  FlatList,
  Modal,
  Alert,
  useColorScheme,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { task } from "@/data/task";
import DisplayCard from "@/components/DisplayCard";
import { useState } from "react";
import { TaskType } from "@/type/taskType";
import { colors } from "@/data/colors";

export default function Index() {
  const [notes, setNotes] = useState<TaskType[]>(task);
  const [title, setTitle] = useState("");
  const [noteType, setNoteType] = useState<TaskType["type"]>("Personal");
  const [description, setDescription] = useState("");
  const [searchText, setSearchText] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [isDarkAppMode, setIsDarkAppMode] = useState<boolean | null>(null);

  const noteTypes: TaskType["type"][] = [
    "Personal",
    "Professional",
    "Career",
    "Finance",
    "Daily Task",
  ];

  // color theme logic
  const systemScheme = useColorScheme();
  const isDarkMode =
    isDarkAppMode !== null ? isDarkAppMode : systemScheme === "dark";
  const theme = isDarkMode ? colors.dark : colors.light;

  // filter methods

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  // handle function
  const handleAddNote = () => {
    // validation
    if (!title.trim() || !description.trim()) {
      return;
    }

    const newNote = {
      id: Date.now().toString(),
      title,
      description,
      type: noteType,
      date: new Date().toLocaleDateString(),
    };

    setNotes((prev) => [newNote, ...prev]);

    // clear form
    setTitle("");
    setDescription("");

    // close modal
    setShowModal(false);

    // alert("Note Added !");
  };

  const handleDeleteNote = (noteId: string) => {
    // setNotes((prev) => prev.filter((item) => item.id !== noteId));

    Alert.alert("Delete Note", "Are you sure you want to delete this Note ?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          setNotes((prev) => prev.filter((item) => item.id !== noteId));
        },
      },
    ]);
  };

  return (
    <SafeAreaView
      style={[styles.safeAreaContainer, { backgroundColor: theme.background }]}
    >
      {/* <StatusBar barStyle={"light-content"} /> */}

      {/* Parent View Container */}
      <View style={{ flex: 1, gap: 20, position: "relative" }}>
        {/* ImageBackground Component */}
        <View style={[styles.bgImageContainer, { borderColor: theme.border }]}>
          <ImageBackground
            source={require("../../assets/images/bg-image/bgImage1.jpg")}
            resizeMode="cover"
            style={styles.bgImage}
          >
            <View style={{ paddingVertical: 40 }}>
              <Text style={styles.pageHeading}>Daily Target List</Text>
            </View>
          </ImageBackground>
        </View>

        {/* App Heading */}
        <View style={styles.titleContainer}>
          <Text style={[styles.sectionHead, { color: theme.text }]}>
            My Notes
          </Text>
          <Pressable onPress={() => setIsDarkAppMode(!isDarkAppMode)}>
            {isDarkAppMode ? (
              <Ionicons
                name="sunny"
                size={24}
                color="white"
                style={styles.icons}
              />
            ) : (
              <Ionicons
                name="moon-sharp"
                size={24}
                color="black"
                style={styles.icons}
              />
            )}
          </Pressable>
        </View>

        {/* Notes Search Bar */}
        <View style={[styles.inputContainer]}>
          <Feather
            name="search"
            size={24}
            color=""
            style={{ color: "#DF5D17" }}
          />
          <TextInput
            style={[styles.searchInput]}
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search Your Note"
          />
        </View>

        {/* Notes List Display */}
        <View style={{ flex: 1 }}>
          <FlatList
            data={filteredNotes}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{
              paddingBottom: 30,
            }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <DisplayCard
                id={item.id}
                title={item.title}
                date={item.date}
                description={item.description}
                type={item.type}
                onDelete={handleDeleteNote}
                isDark={isDarkAppMode}
              />
            )}
          />
        </View>

        {/* Floating Add Note Button */}
        <View>
          <Pressable
            style={styles.addButton}
            onPress={() => setShowModal(true)}
          >
            <Ionicons name="add" size={40} color="#fff" />
          </Pressable>
        </View>
      </View>

      {/* Add Note Modal */}
      <Modal visible={showModal} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text
              style={{ fontSize: 25, fontWeight: "600", textAlign: "center" }}
            >
              Create Your Note
            </Text>

            <View style={styles.modalTextInput}>
              <TextInput
                style={[styles.searchInput]}
                value={title}
                onChangeText={setTitle}
                placeholder="Title"
              />
            </View>

            <View style={styles.modalTextArea}>
              <TextInput
                style={[styles.searchInput]}
                multiline
                numberOfLines={5}
                textAlignVertical="top"
                value={description}
                onChangeText={setDescription}
                placeholder="Description"
              />
            </View>

            <View style={styles.typeContainer}>
              {noteTypes.map((type) => (
                <Pressable
                  key={type}
                  style={[
                    styles.typeButton,

                    noteType === type && styles.activeType,
                  ]}
                  onPress={() => setNoteType(type)}
                >
                  <Text
                    style={[
                      styles.typeText,
                      noteType === type && styles.activeTypeText,
                    ]}
                  >
                    {type}
                  </Text>
                </Pressable>
              ))}
            </View>

            <Pressable onPress={handleAddNote} style={styles.submitButton}>
              <Text style={styles.submitBtnText}>Submit</Text>
            </Pressable>

            <Pressable
              style={styles.closeModal}
              onPress={() => setShowModal(false)}
            >
              <Ionicons name="close-circle-sharp" size={35} color="#DF5D17" />
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flex: 1,
  },

  bgImageContainer: {
    overflow: "hidden",
    borderRadius: 10,
    elevation: 10,
    borderWidth: 2,
    borderColor: "#fff",
  },

  bgImage: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: 15,
  },

  pageHeading: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    color: "#fff",
  },

  sectionHead: {
    fontSize: 30,
    fontWeight: "600",
  },

  icons: {
    padding: 10,
    backgroundColor: "#f59e0b",
    borderRadius: 100,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DF5D17",
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 55,
    backgroundColor: "#f5f5f5",
  },

  searchInput: {
    marginLeft: 10,
    fontSize: 18,
  },

  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  addButton: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    position: "absolute",
    bottom: 25,
    right: 20,
    width: 55,
    height: 55,
    borderRadius: 100,
    backgroundColor: "#f59e0b",
    justifyContent: "center",
    alignItems: "center",
  },

  // modal styles

  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
  },

  modalContainer: {
    position: "relative",
    backgroundColor: "#fff",
    maxHeight: "80%",
    borderRadius: 20,
    padding: 20,
    gap: 15,
  },

  modalTextInput: {
    borderWidth: 1,
    borderColor: "#DF5D17",
    borderRadius: 10,
  },

  typeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  typeButton: {
    borderWidth: 1,
    borderColor: "#DF5D17",
    color: "#262626",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 100,
  },

  typeText: {
    color: "#262626",
  },

  activeTypeText: {
    color: "#fff",
  },

  activeType: {
    backgroundColor: "#DF5D17",
    color: "#fff",
  },

  modalTextArea: {
    borderWidth: 1,
    borderColor: "#DF5D17",
    borderRadius: 10,
    minHeight: 120,
    backgroundColor: "#fff",
  },

  submitButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DF5D17",
    borderRadius: 12,
    paddingVertical: 8,
  },

  submitBtnText: {
    fontSize: 20,
    fontWeight: "600",
    textTransform: "uppercase",
    width: "100%",
    textAlign: "center",
    color: "#fff",
  },

  closeModal: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});
