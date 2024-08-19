import React from 'react';
import Title from '../presentational/Title';
import './SectionText.css';

export default function SectionText({ title, img, blockquote, tagParams, children }) {
    return (
        <section className={`${tagParams.class} section`}>
            <div className={`section-container--${tagParams.directionMode==='reverse' ? 'reverse' : 'forward'}`}>
                {!!img && <img
                    height={img.height}
                    src={img.url}
                    alt={img.alt}
                />}
                <div className={`section-container-text-${tagParams.class}`}>
                    <Title
                        titleText={title.text ?? 'Заголовок'}
                        contentName={title.contentName}
                    />
                    {!!blockquote && <blockquote className='tagline'>
                        {blockquote.text}
                    </blockquote>}
                    {children}
                </div>
            </div>
        </section>
    );
}