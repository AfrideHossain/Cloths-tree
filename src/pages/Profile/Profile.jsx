import useAuthContext from "../../hooks/useAuthContext";

const Profile = () => {
  const { user } = useAuthContext();
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="card card-normal bg-primary-content shadow-lg">
          <div className="card-body">
            <div className="card-title w-full">
              <h1 className="w-full text-center">
                {user?.displayName || "Username"}
              </h1>
            </div>
            <div className="flex md:flex-row flex-col md:items-center gap-5">
              <div className="w-32 h-32 md:mx-0 mx-auto">
                <img
                  className="w-32 h-32 rounded-full object-cover"
                  src={user?.photoURL || "images/icons/user.png"}
                  alt="Display Picture"
                />
              </div>
              <div className="space-y-2">
                <p>
                  {" "}
                  <span className="font-semibold">Email:</span>{" "}
                  {user?.email || "Not provided"}
                </p>
                <p>
                  {" "}
                  <span className="font-semibold">Phone:</span>{" "}
                  {user?.phoneNumber || "Not provided"}
                </p>
                <p>
                  <span className="font-semibold">Joined at:</span>{" "}
                  {Date(user?.metadata?.createdAt) || "Not provided"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
