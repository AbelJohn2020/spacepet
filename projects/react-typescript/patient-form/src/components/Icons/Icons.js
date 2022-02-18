import { FaEllipsisV, FaShoppingCart, FaRegUser } from "react-icons/fa";
import { BsFillGrid3X3GapFill, BsEyeSlash, BsEye, BsCheckCircleFill, BsPhone, BsExclamationCircleFill } from "react-icons/bs";
import { BsCoin } from "react-icons/bs";
import { IoIosWallet, IoIosPaperPlane, IoMdContacts } from "react-icons/io";
import { ImArrowDown } from "react-icons/im";
import { IoAtSharp } from "react-icons/io5"
import { MdCancel } from "react-icons/md"
import { BiWorld } from "react-icons/bi"
import "./Icons.css";

const iconSet = {
  dashBoard: BsFillGrid3X3GapFill,
  ellipsis: FaEllipsisV,
  coin: BsCoin,
  wallet: IoIosWallet,
  paperPlane: IoIosPaperPlane,
  contacts: IoMdContacts,
  receive: ImArrowDown,
  shop: FaShoppingCart,
  user: FaRegUser,
  password: BsEyeSlash,
  showPassword: BsEye,
  email: IoAtSharp,
  check: BsCheckCircleFill,
  null: MdCancel,
  phone: BsPhone,
  invalid: BsExclamationCircleFill,
  world: BiWorld,
};

const Icons = ({ type, size, color }) => {
  const ComponentToRender = iconSet[type];
  return (
    <div className="model-icons">
      { type &&
        <ComponentToRender
            size={size} 
            color={color}
        />
      }
    </div>
   
  );
};

export default Icons;