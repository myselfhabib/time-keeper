import React from 'react';
import './Section.css'

const Section = () => {
    return (
        <div>
            <h2 className="wv-title">Watch Our Video</h2>
            <div className="videos">
                <div className="vid-1">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/jqIDtNCLV_I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="vid-1">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/l0D9OWiQAx4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="vid-1">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/3cxRHutjpEM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="vid-1">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/r5kQelYNekw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Section;