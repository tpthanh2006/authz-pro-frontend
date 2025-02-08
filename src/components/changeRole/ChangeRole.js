import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa';
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getUsers, upgradeUser } from "../../redux/features/auth/authSlice";
import {
  EMAIL_RESET,
  sendAutomatedEmail,
} from "../../redux/features/email/emailSlice";

const ChangeRole = ({_id, email}) => {
    const [userRole, setUserRole] = useState("");
    const dispatch = useDispatch();

  // Change User's Role
  const changeRole = async (e) => {
    e.preventDefault();
    
    if (!userRole) {
      toast.error("Please select a role");
    };

    const userData = {
      role: userRole,
      id: _id
    }
    
    const emailData = {
      subject: "User Role Change - AuthZ Pro",
      send_to: email,
      reply_to: "williamtran26@outlook.com",
      templateId: "d-43015c1250704426a0529690ea73777b",
      url: "/login",
    }

    await dispatch(upgradeUser(userData));
    await dispatch(sendAutomatedEmail(emailData));
    await dispatch(getUsers());
    dispatch(EMAIL_RESET());
  }

  return (
    <div className="sort">
      <form className="--flex-start" onSubmit={(e) => changeRole(e, _id, userRole)}>
        <select value={userRole} onChange={(e) => setUserRole(e.target.value)}>
          <option value="">-- Select --</option>
          <option value="subscriber">Subscriber</option>
          <option value="author">Author</option>
          <option value="admin">Admin</option>
          <option value="suspended">Suspended</option>
        </select>

        <button className="--btn --btn-primary">
          <FaCheck size={15} />
        </button>
      </form>
    </div>
  )
}

export default ChangeRole