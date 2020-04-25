// search by name
  searchByName() {
    if (this.searchValue == "") {
      return this.getChatUsersList()
    } else {
      this.userData = this.userData.filter(res => {
        return res[0].chat_user_name.toLowerCase().match(this.searchValue.toLowerCase())
      })
    }
  }

// sort by name while fetching data from api
res.sort((a, b) => a.name.localeCompare(b.name))
