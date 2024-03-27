<div class="our-locations">
    <div class="our-locations__header">
        <h1 class="resuable-head-title">
            Find Our <span>Locations </span>
        </h1>
        <p class="resuable-head-description">
            Our administration and support staff all have exceptional people skills and trained to assist you with all medical enquiries.
        </p>
    </div>
    <div class="our-locations__inner">
        <div class="our-locations__text-section">
            <div class="our-location__cities">
                <?php foreach ($citiAndData as $city) : ?>
                    <button class="our-locations__city-btn" id="<?php echo $city['id'] ?>" onclick="updateCity(event)">
                        <?php echo $city['city_name'] ?>
                    </button>
                <?php endforeach ?>
            </div>
            <div class="our-location__cities-centers">
                <?php
                foreach ($selectedCity["centers"] as $center) : ?>
                    <div class="our-location__center">
                        <h1 class="our-location__center-name">
                            <?php echo $center["center_name"];  ?>
                        </h1>
                        <p class="our-location__center-address">
                            <?php echo $center["center_address"];  ?>
                        </p>
                        <div class="our-location__center-buttons">
                            <button class="outline-button" onclick="onClickCall(event)" id="callUsBtn<?php echo $center["centerId"] ?>">
                                <img src="./assets/call-us-image.webp" alt="">
                                Call Us
                            </button>
                            <button class="filled-button" data-direction-url="<?php echo $center["map_url"]; ?>" onclick="onClickCenter(event)" id="directionBtn<?php echo $center["centerId"] ?>">
                                <img src="./assets/direction.webp" alt="">
                                Directions
                            </button>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
        <div class="our-locations__map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60909.397161852714!2d78.34006032167967!3d17.419592899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96cb8c494053%3A0x4da3f7e6dc208bb1!2sCion%20Cancer%20Clinics-%20Cancer%20Hospital%20in%20Hyderabad%20-%20Jubilee%20Hills!5e0!3m2!1shi!2sin!4v1711454029803!5m2!1shi!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</div>