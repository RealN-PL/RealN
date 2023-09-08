import Resizer from "react-image-file-resizer";

export  const resizeImage = (
    file: File
  ): Promise<string | File | Blob | ProgressEvent<FileReader>> => {
    return new Promise((resolve, reject) => {
      Resizer.imageFileResizer(
        file,
        800,
        800,
        "JPEG",
        80,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });
  };