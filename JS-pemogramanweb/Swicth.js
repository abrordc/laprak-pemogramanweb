const expr = "pao";
switch (expr) {
    case "jeruk":
        console.log("jeruk ");
        break;
    case "mangga":
    case "pao":
        console.log("sama");
        break;
    default:
        console.log(`tidak tersedia ${expr}.`);
}
