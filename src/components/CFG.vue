<template>
  <section class="max-w-5xl mx-auto p-6 text-white space-y-8">
    <div>
      <h2 class="text-2xl font-bold mb-2">CFG CS2</h2>
      <pre class="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
sensitivity 2
bind k +voicerecord
bind i noclip
bind mwheeldown +jump
volume 0.4
snd_roundend_volume 0
snd_mapobjective_volume 0
snd_deathcamera_volume 0
cl_hud_color 0
hud_showtargetid 1
viewmodel_presetpos 2
cl_hud_telemetry_frametime_show 2
      </pre>
    </div>

    <div>
      <h2 class="text-2xl font-bold mb-2">Viewmodel v2</h2>
      <pre class="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
viewmodel_fov 99
viewmodel_offset_x 9
viewmodel_offset_y 9
viewmodel_offset_z -1.5
viewmodel_presetpos 0
      </pre>
    </div>

    <div>
      <h2 class="text-2xl font-bold mb-2">Crosshairs</h2>
      <ul class="list-disc pl-6 space-y-1">
        <li><strong>Best crosshair ever:</strong> CSGO-DkfWR-2tXNd-q9efV-7CJHk-QQSFE</li>
        <li><strong>HS Crosshair:</strong> CSGO-XTNoM-jDYN2-TrMaq-km2mE-8MUnB</li>
        <li><strong>VALORANT Default:</strong> CSGO-LwFqP-TxQzA-ns4x9-66Nyu-kBYXC</li>
        <li><strong>Current Crosshair:</strong> CSGO-qn2Ac-Ha9MX-87Kok-rVma5-ZmRBD</li>
        <li><strong>Lumedas™ Crosshair:</strong> CSGO-nMEWJ-nVpcG-iZAOc-BzS4r-uoKjC</li>
        <li><strong>Lumedas™ Crosshair2:</strong> CSGO-7tAJS-RWP3N-djnZ9-qt8pJ-sPsKG</li>
        <li><strong>Crosshair:</strong> CSGO-6zcbh-HuJvn-kBHKt-ks7fs-ztHCF</li>
        <li><strong>Crosshair2:</strong> CSGO-SziVH-m6Qmd-44sMk-TnsfH-DSSFE</li>
        <li><strong>Crosshair3:</strong> CSGO-haDdY-RuJXd-2kZTs-9ars3-tXcNE</li>
        <li><strong>Crosshair 2020:</strong> CSGO-QYbW9-excoy-TPacJ-ahpbL-dOSFE</li>
        <li><strong>ropz:</strong> CSGO-UcXBk-p9Jpo-tJiAr-J6qNc-mRFuA</li>
        <li><strong>&lt;3:</strong> CSGO-28wZU-qcyKx-s7cpA-4JODJ-2BFKO</li>
      </ul>
    </div>

    <div>
      <h2 class="text-2xl font-bold mb-2">Video Settings</h2>
      <p>All very low/disabled, multicore rendering on, boost player contrast on, 2x MSAA</p>
      <p><strong>Resolution:</strong> 4:3 1024x768 stretched</p>
    </div>

    <div>
      <h2 class="text-2xl font-bold mb-2">DPI & Sensitivity</h2>
      <p>Sensitivity: 2</p>
      <p>DPI: 400</p>
    </div>
  </section>
</template>

<style scoped>
.cfg-block {
  background-color: var(--secondary-color);
  color: var(--text-color);
  padding: 16px;
  border-radius: 8px;
  font-size: 14px;
  overflow-x: auto;
  white-space: pre-wrap;
}
</style>
