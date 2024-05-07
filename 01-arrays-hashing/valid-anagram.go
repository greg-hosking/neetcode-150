func isAnagram(s string, t string) bool {
    if len(s) != len(t) {
        return false
    }

    sMap := make(map[rune]int)
    tMap := make(map[rune]int)
    for _, char := range s {
        _, exists := sMap[char]
        if exists {
            sMap[char]++
        } else {
            sMap[char] = 1
        }
    }
    for _, char := range t {
        _, exists := tMap[char]
        if exists {
            tMap[char]++
        } else {
            tMap[char] = 1
        }
    }

    for key, _ := range sMap {
        if (sMap[key] != tMap[key]) {
            return false
        }
    }
    return true
}
