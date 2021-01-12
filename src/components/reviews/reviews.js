import React from 'react'
import './reviews.style.css'
import { FacebookProvider, EmbeddedPost } from 'react-facebook';
import { FormattedMessage } from "gatsby-plugin-intl"

const posts = [
    "https://www.facebook.com/jeanette.gustavsson.7/posts/10156992293296207",
    "https://www.facebook.com/illerup/posts/10156879888742915",
    "https://www.facebook.com/inrijaag/posts/10215932977773511",
    "https://www.facebook.com/antonio.perezdiaz.773/posts/2491562104303593",
    "https://www.facebook.com/serafin.fernandez.7/posts/10215691961279155",
    "https://www.facebook.com/Gadgeteer1066/posts/3331907416882120",
    "https://www.facebook.com/axel.blondeel/posts/2793370004086520",
    "https://www.facebook.com/joanna.oldfield/posts/10158232184074672",
    "https://www.facebook.com/hilary.copeland.77/posts/10156650957417549",
    "https://www.facebook.com/rcbull/posts/10157114411785281",
    "https://www.facebook.com/permalink.php?story_fbid=2237656909818413&id=100007223776396",
    "https://www.facebook.com/fatima.zohra.925/posts/10219358224924218",
    "https://www.facebook.com/morgan.sandblad/posts/2780066095381860"
]


const Reviews = () => {
    return (
        <div className='reviews-component'>
            <div className='container'>
                <h3><FormattedMessage id="IndexPage.reviews.revTitle" /></h3>
                <div className='reviews'>
                    <FacebookProvider appId="732989580659837">
                        {
                            posts.map((post, id) => <EmbeddedPost key={id} href={post} />)
                        }
                    </FacebookProvider>
                </div>
            </div>
        </div>
    )
}


export default Reviews
