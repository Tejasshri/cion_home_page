<div class="our-partners">
    <div class="our-partners__header">
        <h1 class="resuable-head-title">
            Our <span>Partners</span>
        </h1>
        <p class="resuable-head-description">
            Our team of accredited, experienced and qualified oncologists and specialists are committed to offer you specialised treatment and excellent care.
        </p>
    </div>
    <div class="our-partners__logo-container">
        <?php foreach ($ourPartners as $partner ): ?>
            <div class="our-partner__logo-box" >
                <img loading="eager" height="100%" width="100%" src="../assets/our_partners_logos/<?php echo $partner; ?>" alt="">
            </div>
        <?php endforeach; ?>
    </div>
</div>