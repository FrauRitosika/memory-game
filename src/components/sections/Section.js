import React from 'react';
import Title from '../presentational/Title';
import './Section.css';

export default function Section({ title, img, blockquote, tagParams, children }) {
    return (
        <section className={`${tagParams.class} section`}>
            <div className={`section-container--${tagParams.directionMode === 'reverse' ? 'reverse' : 'forward'}`}>
                {!!img && <img
                    className='img'
                    height={img.height}
                    src={img.url}
                    alt={img.alt}
                />}
                <div className={`section-container-text-${tagParams.class}`}>
                    <Title
                        title={title.text ?? 'Заголовок'}
                        contentName={title.contentName ?? ''}
                        level={2}
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