function whereIsHero(e, hero, places) {
    const dimention_place = 50;
    const hero_coor = hero.getBoundingClientRect();

    for (const place of places) {
        const place_coor = place.getBoundingClientRect();
        const hero_next_coor_y = e.clientY;
        const hero_next_coor_x = e.clientX;

        hero.style.top = `${hero_next_coor_y}px`;
        hero.style.left = `${hero_next_coor_x}px`;

        const place_central_x = place_coor.x + dimention_place;
        const place_central_y = place_coor.y + dimention_place;

        const distance = Math.sqrt(
            (hero_next_coor_x - place_central_x)*(hero_next_coor_x - place_central_x) +
            (hero_next_coor_y - place_central_y)*(hero_next_coor_y - place_central_y)
        );

        if (distance <= dimention_place) {
            Array.from(places).forEach((p) => {
                p.id != place.id
                    ? p.style.background = '#c3ff00'
                    : place.style.background = 'red';
            });
            return;
        }
    }
}
