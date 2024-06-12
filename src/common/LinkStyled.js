import { colors } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const LinkStyled = ({ text }) => {
    return (
        <div>
            <Link  style={{
                textDecoration: "none",
                color: "#1B1B1B",
                cursor: "pointer",
                fontSize: "15px" ,
                fontWeight: 400,
                lineHeight: "25px",
                fontFamily: "Martel"
            }} href="#">{text}</Link>
        </div>
    )
}

export default LinkStyled