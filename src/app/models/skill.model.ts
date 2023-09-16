export interface SkillTab {
    name: string;
    nav: string;
    header: string;
    content: string;
    skills: Skill[];
}

export interface Skill {
    name: string;
    items: SkillItem[];
}

export interface SkillItem {
    name: string;
    link: string;
}