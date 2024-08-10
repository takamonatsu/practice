export interface ImageData {
    imageId: number,
    src: string,
    title: string,
    text: string
};
export interface ModalState {
    isShow: boolean,
    imageData: ImageData | null;
};