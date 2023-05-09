import "../../../fonts/fonts.css"
import "./searchBar.css"
import searchBarIcon from "../icons/magnifier_icon.svg"

interface searchBar{
}

const showSearchBar = (IconId: string, searchBarId: string) => {
    let icon: HTMLElement | null = document.getElementById(IconId);
    let searchBar: HTMLElement | null = document.getElementById(searchBarId);
    if(icon && searchBar) {
        searchBar.style.display = 'block';
    }
}

const hideSearchBar = (IconId: string, searchBarId: string) => {
    let icon: HTMLElement | null = document.getElementById(IconId);
    let searchBar: HTMLElement | null = document.getElementById(searchBarId);
    if(icon && searchBar) {
        searchBar.style.display = 'none';
    }
}


const SearchBar = (props: searchBar) => {
    let show: boolean = false;
    return (
        <div className={"searchBar"}>
                <div className = {"searchBar__icon"} id = "iconID" onClick={
                    ()=> {
                        if (!show){
                            showSearchBar("iconID", "searchBarID");
                            show = true;
                        }
                        else{
                            hideSearchBar("iconID", "searchBarID");
                            show = false;
                        }
                    }}>
                    <img className = {"searchBar__icon"} src={searchBarIcon} alt = "searchBar icon"/>
                </div>
                <div className={"searchBar__panel"} id = "searchBarID">
                    <input className={"panel"} type="text" placeholder="поиск"/>
                </div>
        </div>
    )
}

export { SearchBar }