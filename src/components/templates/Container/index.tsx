import React from 'react';
import Header from '../../organisms/Header';

type ContainerProps = {
    children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
    return (
        <div>
            <Header
                logoSrc="https://png.pngtree.com/png-vector/20190903/ourmid/pngtree-football-logo-designs-inspiration-isolated-on-white-background-png-image_1721380.jpg"
                logoAlt="My Site Logo"
            />
            <div style={{ padding: '10px 35px' }}>
                {children}
            </div>
        </div>
    )
}

export default Container;