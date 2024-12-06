const prisma = require("../lib/prisma.js");

// Create social Links
const createLinks = async (req, res) => {
  const linksData = req.body;

  const tokenUserId = req.userId;

  linksData.map((data) => {
    data.userId = tokenUserId;
  });

  const allLinkData = linksData.filter((data) => data.name && data.url !== 0);

  console.log(allLinkData);

  if (allLinkData.length === 0) {
    return res.status(400).json({ message: "please write links" });
  }

  try {
    // Create Data in the DataBase
    await prisma.links.createMany({
      data: allLinkData,
    });

    res.status(201).json({ message: "تم أنشاء الروابط بنجاح" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// read Social Links Data by params in the url
const getLinks = async (req, res) => {
  const { userNameId } = req.params;
  try {
    const allUrl = await prisma.user.findUnique({
      where: { userName: userNameId },
      select: {
        userName: true,
        links: {
          select: {
            id: true,
            name: true,
            url: true,
          },
        },
      },
    });
    res.status(200).json(allUrl);
  } catch (error) {
    res.status(500).json({ message: "Failed To Get Links" });
  }
};

//For Example

// update Single Link
// const updateSingleLink = async (req, res) => {
//   const id = req.params.id;

//   const { name, url, show } = req.body;

//   //check if there is Name also Links
//   if (!name || !url) {
//     return res.status(400).json({ message: "Please write name also url" });
//   }

//   try {
//     // check if data present in data base then update it
//     await prisma.links.update({
//       where: {
//         id,
//       },

//       data: {
//         name,
//         url,
//         show,
//       },
//     });

//     res.status(200).json({ message: "Links Updated" });
//   } catch (error) {
//     res.status(500).json({ message: "Faild to Update Links" });
//   }
// };

// const deleteSingleLink = async (req, res) => {
//   const id = req.params.id;

//   try {
//     await prisma.links.delete({ where: { id } });

//     res.status(200).json({ message: "Link Deleted" });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to Delete Link" });
//   }
// };

module.exports = { createLinks, getLinks };
