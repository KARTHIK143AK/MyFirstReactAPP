import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './userDashboard.css'

export default function UserDashboard() {

    const [counter, setCount] = useState(0)

    function CardList(props) {
        return (
            <div class="card m-2">
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.description}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>)
    }

    const movieLists = [
        [{
            name: "Movie 1",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }, {
            name: "Movie 2",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }, {
            name: "Movie 3",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }, {
            name: "Movie 4",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }, {
            name: "Movie 5",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }, {
            name: "Movie 6",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }], [{
            name: "Movie 11",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }, {
            name: "Movie 12",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }, {
            name: "Movie 13",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }, {
            name: "Movie 14",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }, {
            name: "Movie 15",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }, {
            name: "Movie 16",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }], [{
            name: "Movie 21",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }, {
            name: "Movie 22",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }, {
            name: "Movie 23",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }, {
            name: "Movie 24",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }, {
            name: "Movie 25",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }, {
            name: "Movie 26",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }], [{
            name: "Movie 31",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }, {
            name: "Movie 32",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }, {
            name: "Movie 33",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }, {
            name: "Movie 34",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }, {
            name: "Movie 35",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }, {
            name: "Movie 36",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }]]

    const navigate = useNavigate();

    const LogOut = () => {
        console.log(">?>>>Over Here")
        localStorage.clear(); // Clear local storage
        sessionStorage.clear(); // Clear session storage
        navigate("/login");
    }

    return (
        <div>
            <div class="container-fluid">
                <div class="row">
                    <div class="display-flex-between">
                        <div>
                            UserName
                        </div>
                        <button onClick={() => LogOut()}>
                            LogOut
                        </button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-1">
                        Side Bar
                    </div>
                    <div class="col-11 list-wrapper">
                        <div class="row">
                            <div class="display-flex">
                                <div class="align-content-center">
                                    {counter !== 0 ? <button onClick={() => setCount(counter => counter - 1)} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon bg-black"></span>
                                    </button> : ''}

                                </div>
                                <div id="carouselExampleControls" class="carousel slide" data-bs-interval="false">
                                    <div class="carousel-inner">
                                        {
                                            movieLists.map((eachRecord, index) => (
                                                <div class={`carousel-item ${index ? '' : 'active'}`}>
                                                    <div class="row">
                                                        <div class="display-flex">
                                                            {eachRecord.map((car) => <CardList name={car.name} description={car.description} />)}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </div>
                                </div>
                                <div class="align-content-center">
                                    {(counter < movieLists.length - 1) ? <button onClick={() => setCount(counter => counter + 1)} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span class="carousel-control-next-icon bg-black"></span>
                                    </button> : ''}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    // }
}