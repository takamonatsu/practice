export interface Task {
    taskId: number;
    name: string;
    content: string;
    target: string;
}

export interface ModalStateProps {
    isShow: boolean;
    taskId: number | null;
    taskDetails: Task | null;
}