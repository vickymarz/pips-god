import { useFiles } from "hooks";
import userServices from "services/userServices";

export const UploadImages = (event: React.ChangeEvent) => {

    const onSuccess = (data:any) => {
       console.log(data)
       return (data?.data.secure_url)
    }

    const target= event.target as HTMLInputElement;
    const file = (target.files as FileList)[0];
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', `${process.env.REACT_APP_CLOUDINARY_KEY}`)
    const { mutate } = useFiles(userServices.uploadThumbnail, onSuccess)
    mutate(formData)
}

