import deleteImg from "../../../../../../../assets/images/delete.png";
import { Button } from "components";
import { IoIosClose } from "react-icons/io";
import userServices from 'services/userServices';
import { useMutation,  useQueryClient } from 'react-query'

type PropValues = {
    popup: boolean;
    setPopup: (value: boolean) => void;
    id: number
}

export const DeleteModuleConfirmation = ({popup, setPopup, id}: PropValues)  => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation(userServices.deleteModule, {
    onSuccess: () => {
      queryClient.invalidateQueries('get-all-modules')
      queryClient.refetchQueries('get-all-modules');
      setPopup(false);
    },
  })
  return (
    <div className={`${popup ?'fixed top-0 right-0 left-0 bottom-0 w-screen z-20  bg-black bg-opacity-50': 'hidden'}`}>
      <div className="bg-white mx-auto w-5/6 sm:w-2/3 px-2 flex flex-col justify-center items-center font-bold  text-center text-xl my-[40px] rounded-[20px]">
        <IoIosClose
          className="w-12 h-12 self-end cursor-pointer my-2"
          data-close="close"
          onClick={() => {
            setPopup(false);
          }}
        />
        <div className="my-5">
          <img src={deleteImg} alt={"delete-icon"} className="mix-blend-hard-light"/>
        </div>
        <p className="text-xl md:text-3xl mb-4">Are you sure you want to delete this module?</p>
        <p className="text-[14px] md:text-[24px] text-[#8B8B8B]">Kindly note that deleting the module will delete both the video and the file. </p>
        <p className="text-[14px] mt-4 md:text-[20px] text-[#8B8B8B]"> This operation is not reversible! </p>
        <div className="flex justify-center items-center gap-x-[20px]  mt-5 md:mt-10 mb-8 ">
         <Button
          type="button"
          onClick={() => mutate(id)}
          data-close="close"
          className=" text-xl font-bold py-2.5 px-8 text-white bg-[#0D142E] rounded-lg"
        >
          YES
        </Button>
        <Button
          type="button"
          onClick={() => {
            setPopup(false);
          }}
          data-close="close"
          className=" text-xl font-bold py-2.5 px-8 text-white bg-[#0D142E] rounded-lg"
        >
          NO
        </Button>
         </div>
      </div>
    </div>
  );
};

