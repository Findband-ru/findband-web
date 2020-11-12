const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.deleteAllUsers = functions.https.onCall(async (data, context) => {
  const listAllUsers = async (nextPageToken) => {
    const usersList = [];
    const listUsersResult = await admin.auth().listUsers(1000, nextPageToken);
    listUsersResult.users.forEach((userRecord) => {
      console.log("user", userRecord.toJSON());
      usersList.push(userRecord.uid);
    });
    if (listUsersResult.pageToken) {
      listAllUsers(listUsersResult.pageToken);
    }

    return usersList;
  };
  const list = await listAllUsers();
  console.log("list", list);
  admin
    .auth()
    .deleteUsers(list)
    .then((deleteUsersResult) => {
      console.log(
        "Successfully deleted " + deleteUsersResult.successCount + " users"
      );
      console.log(
        "Failed to delete " + deleteUsersResult.failureCount + " users"
      );
      deleteUsersResult.errors.forEach(function (err) {
        return err.error.toJSON();
      });
      return deleteUsersResult;
    })
    .catch((error) => {
      console.log("Error deleting users:", error);
      return error;
    });
});

exports.deleteUser = functions.https.onCall(async (data, context) => {
  console.log(data);
  admin
    .auth()
    .deleteUser(data.userId)
    .then((deleteUsersResult) => {
      console.log(
        "Successfully deleted " + deleteUsersResult.successCount + " users"
      );
      console.log(
        "Failed to delete " + deleteUsersResult.failureCount + " users"
      );
      deleteUsersResult.errors.forEach(function (err) {
        return err.error.toJSON();
      });
      return deleteUsersResult;
    })
    .catch((error) => {
      console.log("Error deleting users:", error);
      return error;
    });
});
