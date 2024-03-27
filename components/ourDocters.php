<div class="our-doctors">
            <div class='our-doctor__header'>
                <h1 class='our-doctors__title'>
                    OUR <span>EXPERT</span> DOCTORS
                </h1>
                <p class='our-doctors__description'>
                    Our team of accredited, experienced
                    and qualified oncologists and specialists
                    are committed to offer you specialised
                    treatment and excellent care.
                </p>
            </div>
            <div class='our-doctor__cards'>
                <?php include("./components/array.php") ?>
                <?php
                foreach ($doctors as $doctor) {
                    echo "
                        <div class='our-doctor__card'>
                            <img class='our-doctor__image' src='{$doctor['image_url']}' alt=''>
                            <div class='our-doctor__details'>
                                <h1 class='our-doctor__name'>{$doctor['doctor_name']}</h1>
                                <p class='our-doctor__position'>{$doctor['position']}</p>
                                <p class='our-doctor__experience'>Experience {$doctor['experience']}</p>
                                <button class='our-doctor__button'>Book An Appointment</button>
                            </div>
                        </div>
                    ";
                }
                ?>
            </div>
        </div>