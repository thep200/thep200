function heroRun(e, hero, places)
{
    const hero_current_coor = hero.getBoundingClientRect();

    const hero_current_coor_x = hero_current_coor.left;
    const hero_current_coor_y = hero_current_coor.top;

    const hero_next_coor_x = e.clientX;
    const hero_next_coor_y = e.clientY;

    movePointToB(
        e,
        {x: hero_current_coor_x, y: hero_current_coor_y},
        {x: hero_next_coor_x, y: hero_next_coor_y},
        hero,
        places
    );
}


function movePointToB(e, pointA, pointB, hero, places)
{
    const duration = 1500;

    const stepX = (pointB.x - pointA.x) / duration;
    const stepY = (pointB.y - pointA.y) / duration;

    const interval = 10;
    let currentTime = 0;

    const moveInterval = setInterval(() => {
        currentTime += interval;

        if (currentTime < duration)
        {
            pointA.x += stepX * interval;
            pointA.y += stepY * interval;

            hero.style.left = `${pointA.x}px`;
            hero.style.top = `${pointA.y}px`;
        } else {
            clearInterval(moveInterval)
            whereIsHero(e, places);
        }
    }, interval);
}


function whereIsHero(e, places)
{
    const dimention_place = 50;

    const hero_next_coor_x = e.clientX;
    const hero_next_coor_y = e.clientY;

    for (const place of places) {
        const place_coor = place.getBoundingClientRect();

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
    Array.from(places).forEach((p) => { p.style.background = '#c3ff00'; });
}
