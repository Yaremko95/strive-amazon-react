import React from "react";
import NavBar from "../components/ui/NavBar";
import { Container } from "react-bootstrap";

function MainLayout(props) {
    const [searchQuery, setSearchQuery] = React.useState('')

    return (
        <>
            <NavBar handleSearch={(query)=>setSearchQuery(query)} searchQuery={searchQuery}/>
            <Container  className={"mt-5"}>{React.cloneElement(props.children, {searchQuery:searchQuery})}</Container>


        </>
    );
}

export default MainLayout;