import React, { Component } from 'react'
import Ex1_container from './Ex1_container'

export default class Ex1_banner extends Component {
    render() {
        return (
            <div className='container px-0'>
                <header className="py-5">
                    <div className="container px-lg-5">
                        <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
                            <div className="m-4 m-lg-5">
                                <h1 className="display-5 fw-bold">A warm welcome!</h1>
                                <p className="fs-4">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                                <a className="btn btn-primary btn-lg" href="#!">Call to action</a>
                            </div>
                        </div>
                    </div>
                </header>
                <Ex1_container />
            </div>

        )
    }
}
