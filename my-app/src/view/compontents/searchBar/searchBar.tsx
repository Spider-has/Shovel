import "../../../fonts/fonts.css"
import "./searchBar.css"
import searchBarIcon from "../icons/magnifier_icon.svg"

interface searchBar{
}

const showSearchBar = (IconId: string, searchBarId: string) => {
    let icon: HTMLElement | null = document.getElementById(IconId);
    let searchBar: HTMLElement | null = document.getElementById(searchBarId);
    if(icon && searchBar) {
        icon.style.display = 'none';
        searchBar.style.display = 'block';
    }
}

const hideSearchBar = (IconId: string, searchBarId: string) => {
    let icon: HTMLElement | null = document.getElementById(IconId);
    let searchBar: HTMLElement | null = document.getElementById(searchBarId);
    if(icon && searchBar) {
        icon.style.display = 'block';
        searchBar.style.display = 'none';
    }
}


const SearchBar = (props: searchBar) => {
    return (
        <div className={"searchBar"}>
            <div className = {"searchBar__icon"} id = "iconID" onClick = {
                () => {
                    showSearchBar("iconID", "searchBarID");
                }
            }>
                <img className = {"searchBar__icon"} src={searchBarIcon} alt = "searchBar icon"/>
            </div>
            <div className={"searchBar__panel"} id = "searchBarID" onClick = {
                () => {
                    hideSearchBar("iconID", "searchBarID");
                }
            }>
                <input className={"panel panel_icon-type"} type="text" placeholder="поиск"/>
            </div>
        </div>
    )
}

export { SearchBar }