const FilterNotesList = (state, data) => {
    let tempData = [...data];
    //filter on ratings
    tempData = tempData.filter((item)=>item.date == state.date);
    //filter on pricing
    tempData = tempData.filter((item) => item.title == state.title);
    //filter on category(men-women)
    // tempData = state.category.length === 0
    //             ? tempData
    //             : tempData.filter((product) => state.category.includes(product.category));
    
    return tempData;
  };

  const SortProducts = (sortBy, data) => {
    let tempData = [...data];
    if (sortBy === "HIGH_TO_LOW") {
      tempData.sort((a, b) => b - a);
    }
    if (sortBy === "LOW_TO_HIGH") {
      tempData.sort((a, b) => a - b);
    }
  
    return tempData;
  };
  
  const SearchProducts = (element,data) =>{
    let tempData = [...data];
    if(element!="" && element.length >0)
    {
      tempData =  data.filter(
        item => {
          return (
            item
            .title
            .toLowerCase()
            .includes(element.toLowerCase()) 
          );
        }
      );
    }
    return tempData
  }

  const handleLogout=(setAuth)=>{
    localStorage.removeItem("token");
    setAuth(false);
  }
export {FilterNotesList,SortProducts,SearchProducts,handleLogout}