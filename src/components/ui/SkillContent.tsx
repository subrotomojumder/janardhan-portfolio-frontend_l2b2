"use client"

import { TSkill } from '@/types/skills.type';
import SkillBar from 'react-skillbars';


const SkillContent = ({ skills }: { skills: TSkill[] }) => {
    const skillsData = skills.map(skill => ({
        type: skill.title,
        level: skill.level
    }))
    return (
        <SkillBar skills={skillsData} symbolColor={'#3498db'} />
    );
};

export default SkillContent;