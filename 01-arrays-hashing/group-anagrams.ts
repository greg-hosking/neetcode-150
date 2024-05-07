function groupAnagrams(strs: string[]): string[][] {
    const groups = new Map<string, string[]>();

    strs.forEach((str) => {
        const sorted = str.split("").sort().join("");
        if (groups[sorted]) {
            groups[sorted].push(str);
        } else {
            groups[sorted] = [str];
        }
    });

    const groupsArr: string[][] = [];
    Object.values(groups).forEach((group: string[]) => {
        groupsArr.push(group);
    });
    return groupsArr;
}
