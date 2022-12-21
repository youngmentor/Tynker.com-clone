import React from 'react'

const Body61 = ({ img, p1, p2, p, height }) => {
    const style = {
        height: height
    }
  return (
    <div style={style} className="hp-control-testimonial_wrap">
    <div className="Comp6_main">
        <blockquote>
            <p>
                {p}
            </p>
        </blockquote>
        <div className="hp-control-testimonial-meta">
            <span>
                <b>{p1}</b>
                {p2 && <p>{p2}</p>}
            </span>
            <img src={img} style={{ width: 78, height: 78, borderRadius: 50 }} className="hp-control-testimonial-avatar" alt="Student testimonial" />
        </div>
    </div>
</div>
  )
}

export default Body61