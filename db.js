// StudySync Database Module
// Uses localStorage for client-side data persistence
// Can be extended to use server-side database later

export const db = {
  // Save user data
  saveUser: function(userData) {
    try {
      localStorage.setItem('studySyncUser_' + userData.username, JSON.stringify(userData));
      console.log('User saved:', userData.username);
      return true;
    } catch (error) {
      console.error('Error saving user:', error);
      return false;
    }
  },

  // Get user data
  getUser: function(username) {
    try {
      const data = localStorage.getItem('studySyncUser_' + username);
      if (data) {
        return JSON.parse(data);
      }
      return null;
    } catch (error) {
      console.error('Error getting user:', error);
      return null;
    }
  },

  // Save study materials
  saveMaterial: function(material) {
    try {
      const materials = this.getMaterials() || [];
      materials.push(material);
      localStorage.setItem('studySyncMaterials', JSON.stringify(materials));
      console.log('Material saved:', material.title);
      return true;
    } catch (error) {
      console.error('Error saving material:', error);
      return false;
    }
  },

  // Get all materials
  getMaterials: function() {
    try {
      const materials = localStorage.getItem('studySyncMaterials');
      return materials ? JSON.parse(materials) : [];
    } catch (error) {
      console.error('Error getting materials:', error);
      return [];
    }
  },

  // Delete material
  deleteMaterial: function(index) {
    try {
      const materials = this.getMaterials();
      materials.splice(index, 1);
      localStorage.setItem('studySyncMaterials', JSON.stringify(materials));
      console.log('Material deleted at index:', index);
      return true;
    } catch (error) {
      console.error('Error deleting material:', error);
      return false;
    }
  }
};

export default db;
