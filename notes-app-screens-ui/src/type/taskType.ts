export interface TaskType {
  id: string;
  title: string;
  date: string;
  type: "Personal" | "Career" | "Professional" | "Finance" | "Daily Task";
  description: string;
}
