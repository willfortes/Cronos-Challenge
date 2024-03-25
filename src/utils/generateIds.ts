function generateId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const sections = [];
    for (let i = 0; i < 4; i++) {
        let section = '';
        for (let j = 0; j < 4; j++) {
            section += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        sections.push(section);
    }
    return sections.join('-');
}

export default generateId