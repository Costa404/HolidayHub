import { Link } from "react-router-dom";
import { useCurrentUser } from "../../../context/errorContext/useCurrentUserAuth";
import { motion } from "framer-motion";

const Homepage = () => {
  const { currentUser } = useCurrentUser();
  console.log("currentUser", currentUser);

  return (
    <motion.div
      className="container py-5 w-75 vh-100"
      style={{ backgroundColor: "#f0f8ff" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="row">
        <div className="col-12 text-center">
          <motion.h1
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="display-4"
          >
            Welcome to Holiday Hub, {currentUser?.username}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lead"
          >
            Here, you can manage your holidays and view all users.
          </motion.p>
          <div className="mt-4">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <Link to="/myProfile" className="btn btn-primary btn-lg">
                Manage My Holidays
              </Link>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
              className="ms-3"
            >
              <Link to="/users" className="btn btn-secondary btn-lg">
                View Users
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
