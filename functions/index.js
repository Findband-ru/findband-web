const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

/* Удаление всех пользователей (для администратора) */
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

/* Удаление пользователя в Firestore */
exports.deleteUser = functions.https.onCall(async (data, context) => {
  const bucket = admin.storage().bucket();
  console.log(data);
  try {
    const deleteUsersResult = await admin.auth().deleteUser(data.userId);
    console.log(
      "Successfully deleted " + deleteUsersResult.successCount + " users"
    );
    console.log(
      "Failed to delete " + deleteUsersResult.failureCount + " users"
    );
    deleteUsersResult.errors.forEach((err) => {
      return err.error.toJSON();
    });
    await bucket.deleteFiles({
      prefix: `audio/${data.userId}/`,
    });
    await bucket.deleteFiles({
      prefix: `images/${data.userId}/`,
    });
    return "user deleted";
  } catch (error) {
    console.log("Error deleting users:", error);
    return error;
  }
});
