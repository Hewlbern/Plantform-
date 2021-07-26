import Image from "next/image";
import Modal from "components/Modal";

export default function Plant(props) {
  const { ImageLink, Name, Description, ContactLink } = props;

  return (
    <div className="text-left border rounded-xl hover:text-blue-600 focus:text-blue-600">
      {/* <a
      href={ContactLink}
    > */}
          {/* <h3 className="text-2xl font-bold">{Name}</h3> */}

      
      {/* </a> */}
      <Modal 
      
      ImageLink={ImageLink}
      Name={Name}
      Description={Description}
      ContactLink={ContactLink}
      
      />
    </div>
  );
}
