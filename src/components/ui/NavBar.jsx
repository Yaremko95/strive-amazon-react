import React, { Component } from "react";
import {
    Navbar,
    Nav,
    InputGroup,
    FormControl,
    Form,
    Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar (props) {

    const {searchQuery, handleSearch} = props
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={Link} to={"/"}>
                    Strive Amazon
                </Navbar.Brand>

                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" value={searchQuery} onChange={(e)=>handleSearch(e.target.value)} />
                </Form>
            </Navbar>
        );

}

export default NavBar;
