import React from 'react'
import Filmbyoasis from './Filmbyoasis'
import WeAid from './Weaid'
import Philipmix from './Philipmix'
import Authentication from './Authentication'
import Bata from './Bata'
import Landingpage from './Landingpage'
import Auth from './Auth'
import Calculator from './Calculator'

const Project = ({ oasis, we, philip, auth, ba, landing, au, calc }) => {
    return (
        <div>
            <Filmbyoasis oasis={oasis} />
            <WeAid we={we} />
            <Philipmix philip={philip} />
            <Authentication auth={auth} />
            <Bata ba={ba} />
            <Landingpage landing={landing} />
            <Auth au={au} />
            <Calculator calc={calc} />

        </div>
    )
}

export default Project