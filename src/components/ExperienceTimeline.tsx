import VerticalTimelineComponent from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap, FaStar } from 'react-icons/fa';

const { VerticalTimeline, VerticalTimelineElement } = VerticalTimelineComponent;

const experiences = [
    {
        date: "2023 - Presente",
        title: "Desarrollador Freelance",
        subtitle: "Remoto",
        desc: "Desarrollo de aplicaciones web a medida, optimización de rendimiento y consultoría tecnológica.",
        icon: FaBriefcase,
        type: "work"
    },
    {
        date: "2023",
        title: "Técnico Superior Universitario en Informática",
        subtitle: "Universidad Nacional Experimental",
        desc: "Graduado con mención honorífica (19.4/20). Tesis enfocada en sistemas de gestión automatizados.",
        icon: FaGraduationCap,
        type: "education"
    },
    {
        date: "2021 - 2023",
        title: "Soporte Técnico & SysAdmin Jr.",
        subtitle: "Servicios Locales",
        desc: "Mantenimiento de infraestructura, configuración de servidores Linux y soporte a usuarios finales.",
        icon: FaBriefcase,
        type: "work"
    }

];

export default function ExperienceTimeline() {
    return (
        <div className="py-10">
            <VerticalTimeline lineColor={'rgba(255, 255, 255, 0.1)'}>
                {experiences.map((exp, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#fff', boxShadow: 'none' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgba(255, 255, 255, 0.05)' }}
                        date={exp.date}
                        iconStyle={{ background: exp.type === 'work' ? '#10b981' : '#64748b', color: '#fff' }}
                        icon={<span className="text-2xl"><exp.icon /></span>}
                    >
                        <h3 className="vertical-timeline-element-title text-xl font-bold">{exp.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle text-sm text-slate-400 mt-1">{exp.subtitle}</h4>
                        <p className="!text-slate-300 !font-normal !mt-4">
                            {exp.desc}
                        </p>
                    </VerticalTimelineElement>
                ))}

                <VerticalTimelineElement
                    iconStyle={{ background: '#fff', color: '#000' }}
                    icon={<FaStar />}
                />
            </VerticalTimeline>
        </div>
    );
}
