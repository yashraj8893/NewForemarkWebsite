import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import type { ServiceData } from '../data/servicesData';
import './WebsiteApproach.css';

const shapes = ['hex', 'oct', 'round', 'pent', 'bevel', 'diamond'] as const;

export function WebsiteApproach({ service }: { service: ServiceData }) {
    const [selected, setSelected] = useState(0);
    const [displayed, setDisplayed] = useState(0);
    const [leaving, setLeaving] = useState(false);
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const shapeRef = useRef<HTMLButtonElement>(null);
    const items = service.philosophy;

    function select(index: number) {
        if (index === selected) return;
        setSelected(index);
        if (timer.current) clearTimeout(timer.current);
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced) { setDisplayed(index); setLeaving(false); return; }
        setLeaving(true);
        timer.current = setTimeout(() => { setDisplayed(index); setLeaving(false); }, 110);
    }
    useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
    const current = items[displayed];
    const Icon = current.icon;
    const next = (selected + 1) % items.length;
    const shape = shapes[selected % shapes.length];

    function tilt(e: React.PointerEvent<HTMLButtonElement>) {
        if (e.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--tilt-y', `${((e.clientX-r.left)/r.width - .5)*7}deg`);
        e.currentTarget.style.setProperty('--tilt-x', `${-((e.clientY-r.top)/r.height - .5)*5}deg`);
    }
    function resetTilt() {
        shapeRef.current?.style.setProperty('--tilt-x', '0deg');
        shapeRef.current?.style.setProperty('--tilt-y', '0deg');
    }
    return (
        <section className="website-approach" aria-labelledby="website-approach-title">
            <div className="wa-container">
                <div className="wa-eyebrow"><span />Our Approach</div>
                <h2 id="website-approach-title" className="wa-heading">The Foremark<br />Standard<span>.</span></h2>
                <p className="wa-subtitle">{service.howWeDoItSubtitle}</p>
                <div className="wa-layout">
                    <div className="wa-list" aria-label="Explore our approach">
                        {items.map((item, i) => {
                            const ItemIcon = item.icon;
                            return <button type="button" key={item.title} className={`wa-row ${selected === i ? 'is-active' : ''}`}
                                aria-pressed={selected === i} onPointerEnter={e => { if (e.pointerType === 'mouse') select(i); }}
                                onFocus={() => select(i)} onClick={() => select(i)}>
                                <ItemIcon size={19} className="wa-row-icon" aria-hidden="true" />
                                <span className="wa-number">{String(i+1).padStart(2, '0')}</span>
                                <span className="wa-row-title">{item.title}</span><ArrowRight className="wa-row-arrow" size={17} aria-hidden="true" />
                            </button>;
                        })}
                    </div>
                    <div className="wa-stage">
                        <button ref={shapeRef} type="button" className="wa-shape-button" onClick={() => select(next)} onPointerMove={tilt} onPointerLeave={resetTilt} aria-label={`Next: ${items[next].title}`}>
                            <span aria-hidden="true" className={`wa-shape wa-peek wa-${shapes[next % shapes.length]}`} />
                            <span aria-hidden="true" className={`wa-shape wa-plate wa-${shape}`} />
                            <span aria-hidden="true" className={`wa-shape wa-outline wa-${shape}`} />
                            <span className={`wa-shape wa-face wa-${shape}`}>
                                <span className={`wa-content ${leaving ? 'is-leaving' : ''}`} key={displayed}>
                                    <span className="wa-icon"><Icon size={22} aria-hidden="true" /></span>
                                    <span className="wa-label">FOREMARK STANDARD</span>
                                    <span className="wa-card-title">{current.title}</span>
                                    <span className="wa-description">{current.description}</span>
                                </span>
                            </span>
                            <span className="wa-next" aria-hidden="true"><ArrowRight size={19} /></span>
                        </button>
                        <div className="wa-progress" aria-label={`Principle ${selected+1} of ${items.length}`}>
                            <span><b>{String(selected+1).padStart(2,'0')}</b> / {String(items.length).padStart(2,'0')}</span>
                            <div className="wa-dots">{items.map((item, i) => <button type="button" key={item.title} className={i===selected ? 'is-active' : ''} onClick={() => select(i)} aria-label={`Show ${item.title}`} aria-pressed={i === selected} />)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
