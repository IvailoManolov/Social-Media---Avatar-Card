import React from 'react'
import './Card.css';

const Card = () => {

  return (
    <div className="card">
        <div className="imgbox">
            <img src="https://img.freepik.com/free-photo/beautiful-woman-portrait_144627-27912.jpg?w=2000" alt="" />
        </div>

        <div className="content">

            <div className="details">
                <h2>Emma Watson<br/><span>Senior Software Engineer</span></h2>
                <div className="data">
                    <h3>342<br/><span>Posts</span></h3>
                    <h3>120K<br/><span>Followers</span></h3>
                    <h3>285<br/><span>Following</span></h3>
                </div>

                <div className="action_buttons">
                    <button>
                        Hire
                    </button>
                    <button>
                        Contact
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card