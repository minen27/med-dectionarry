const chapters = {
    "Orientation anatomique": [
        { fr: "Antérieur", en: "Anterior" },
        { fr: "Postérieur", en: "Posterior" },
        { fr: "Supérieur", en: "Superior" },
        { fr: "Inférieur", en: "Inferior" },
        { fr: "Latéral", en: "Lateral" },
        { fr: "Médial", en: "Medial" },
        { fr: "Proximal", en: "Proximal" },
        { fr: "Distal", en: "Distal" },
        { fr: "Plan sagittal", en: "Sagittal plane" },
        { fr: "Plan frontal", en: "Frontal plane" },
        { fr: "Plan transversal", en: "Transverse plane" },
        { fr: "Position anatomique", en: "Anatomical position" }
    ],

    "Ostéologie – Membre Supérieur": [
        { fr: "Clavicule", en: "Clavicle" },
        { fr: "Face supérieure", en: "Superior surface" },
        { fr: "Face inférieure", en: "Inferior surface" },
        { fr: "Sillon subclavier", en: "Subclavian groove" },
        { fr: "Foramen nourricier", en: "Nutrient foramen" },
        { fr: "Ligament costo-claviculaire", en: "Costoclavicular ligament" },
        { fr: "Ligne trapézoïde", en: "Trapezoid line" },
        { fr: "Tubercule conoïde", en: "Conoid tubercle" },
        { fr: "Bord ventral", en: "Anterior border" },
        { fr: "Bord dorsal", en: "Posterior border" },
        { fr: "Extrémité médiale", en: "Medial end" },
        { fr: "Extrémité latérale", en: "Lateral end" },

        { fr: "Scapula / Omoplate", en: "Scapula / Shoulder blade" },
        { fr: "Fosse subscapulaire", en: "Subscapular fossa" },
        { fr: "Pilier de la scapula", en: "Pillar of the scapula" },
        { fr: "Fosse supra-épineuse", en: "Supraspinous fossa" },
        { fr: "Fosse infra-épineuse", en: "Infraspinous fossa" },
        { fr: "Épine scapulaire", en: "Scapular spine" },
        { fr: "Acromion", en: "Acromion" },
        { fr: "Cavité glénoïdale", en: "Glenoid cavity" },
        { fr: "Col de la scapula", en: "Neck of the scapula" },
        { fr: "Processus coracoïde", en: "Coracoid process" },
        { fr: "Tubercule supra-glénoïdal", en: "Supraglenoid tubercle" },
        { fr: "Tubercule infra-glénoïdal", en: "Infraglenoid tubercle" },
        { fr: "Angle crânial / caudal / latéral", en: "Superior / Inferior / Lateral angle" },
        { fr: "Bord médial / latéral / crânial", en: "Medial / Lateral / Superior border" },

        { fr: "Humérus", en: "Humerus" },
        { fr: "Diaphyse", en: "Shaft / Diaphysis" },
        { fr: "Tubérosité deltoïdienne", en: "Deltoid tuberosity" },
        { fr: "Sillon du nerf radial", en: "Radial groove" },
        { fr: "Tête humérale", en: "Humeral head" },
        { fr: "Col anatomique", en: "Anatomical neck" },
        { fr: "Col chirurgical", en: "Surgical neck" },
        { fr: "Tubercule majeur (trochiter)", en: "Greater tubercle" },
        { fr: "Tubercule mineur (trochin)", en: "Lesser tubercle" },
        { fr: "Sillon intertuberculaire", en: "Intertubercular groove" },
        { fr: "Crête médiale / latérale", en: "Medial / Lateral crest" },
        { fr: "Trochlée humérale", en: "Trochlea of humerus" },
        { fr: "Capitulum", en: "Capitulum" },
        { fr: "Fosse coronoïdienne / olécranienne / radiale", en: "Coronoid / Olecranon / Radial fossa" },
        { fr: "Épicondyle médial / latéral", en: "Medial / Lateral epicondyle" },

        { fr: "Radius", en: "Radius" },
        { fr: "Tête radiale", en: "Radial head" },
        { fr: "Col du radius", en: "Neck of radius" },
        { fr: "Tubérosité radiale", en: "Radial tuberosity" },
        { fr: "Diaphyse", en: "Shaft" },
        { fr: "Processus styloïde du radius", en: "Styloid process of radius" },
        { fr: "Incisure ulnaire", en: "Ulnar notch" },

        { fr: "Ulna / Cubitus", en: "Ulna" },
        { fr: "Olécrâne", en: "Olecranon" },
        { fr: "Incisure trochléaire", en: "Trochlear notch" },
        { fr: "Processus coronoïde", en: "Coronoid process" },
        { fr: "Tubérosité ulnaire", en: "Ulnar tuberosity" },
        { fr: "Tête de l’ulna", en: "Head of ulna" },
        { fr: "Processus styloïde de l’ulna", en: "Styloid process of ulna" },

        { fr: "Os du carpe", en: "Carpal bones" },
        { fr: "Scaphoïde", en: "Scaphoid" },
        { fr: "Lunatum / Semi-lunaire", en: "Lunate" },
        { fr: "Triquétrum / Pyramidal", en: "Triquetrum" },
        { fr: "Pisiforme", en: "Pisiform" },
        { fr: "Trapèze", en: "Trapezium" },
        { fr: "Trapézoïde", en: "Trapezoid" },
        { fr: "Capitatum / Grand os", en: "Capitate" },
        { fr: "Hamatum / Os crochu", en: "Hamate" },

        { fr: "Métacarpiens", en: "Metacarpals" },
        { fr: "Phalanges proximales", en: "Proximal phalanges" },
        { fr: "Phalanges moyennes", en: "Intermediate phalanges" },
        { fr: "Phalanges distales", en: "Distal phalanges" },
        { fr: "Os sésamoïdes", en: "Sesamoid bones" }
    ],

    "Ostéologie – Membre Inférieur": [
        { fr: "Os coxal", en: "Hip bone" },
        { fr: "Ilion / Ilium", en: "Ilium" },
        { fr: "Pubis", en: "Pubis" },
        { fr: "Ischion / Ischium", en: "Ischium" },
        { fr: "Acétabulum", en: "Acetabulum" },
        { fr: "Cavité cotyloïde", en: "Cotyloid cavity" },
        { fr: "Limbus acétabulaire", en: "Acetabular rim" },
        { fr: "Surface semi-lunaire", en: "Semilunar surface" },
        { fr: "Fosse acétabulaire", en: "Acetabular fossa" },
        { fr: "Surface glutéale", en: "Gluteal surface" },
        { fr: "Lignes glutéales", en: "Gluteal lines" },
        { fr: "Foramen obturé", en: "Obturator foramen" },
        { fr: "Ligne arquée", en: "Arcuate line" },
        { fr: "Fosse iliaque", en: "Iliac fossa" },
        { fr: "Surface auriculaire", en: "Auricular surface" },
        { fr: "Tubérosité iliaque", en: "Iliac tuberosity" },
        { fr: "Crête iliaque", en: "Iliac crest" },
        { fr: "Épine iliaque antéro-supérieure", en: "Anterior superior iliac spine" },
        { fr: "Épine iliaque postéro-supérieure", en: "Posterior superior iliac spine" },
        { fr: "Épine sciatique", en: "Ischial spine" },
        { fr: "Bord antérieur / postérieur", en: "Anterior / Posterior border" },
        { fr: "Branche ischio-pubienne", en: "Ischiopubic ramus" },

        { fr: "Tête fémorale", en: "Femoral head" },
        { fr: "Fovéa capitis", en: "Fovea capitis" },
        { fr: "Col fémoral", en: "Femoral neck" },
        { fr: "Grand trochanter", en: "Greater trochanter" },
        { fr: "Petit trochanter", en: "Lesser trochanter" },
        { fr: "Ligne âpre", en: "Linea aspera" },
        { fr: "Lèvres (médiale/latérale)", en: "Lips (medial/lateral) of linea aspera" },
        { fr: "Surface poplitée", en: "Popliteal surface" },
        { fr: "Surface patellaire", en: "Patellar surface" },
        { fr: "Trochlée fémorale", en: "Femoral trochlea" },
        { fr: "Condyle (médial/latéral)", en: "Medial / Lateral condyle" },
        { fr: "Épicondyle (médial/latéral)", en: "Medial / Lateral epicondyle" },
        { fr: "Fosse intercondylaire", en: "Intercondylar fossa" },

        { fr: "Tibia", en: "Tibia" },
        { fr: "Épiphyse proximale", en: "Proximal epiphysis" },
        { fr: "Plateau tibial", en: "Tibial plateau" },
        { fr: "Éminence intercondylaire", en: "Intercondylar eminence" },
        { fr: "Tubérosité tibiale", en: "Tibial tuberosity" },
        { fr: "Crête tibiale", en: "Tibial crest" },
        { fr: "Malléole médiale", en: "Medial malleolus" },
        { fr: "Surface articulaire supérieure", en: "Superior articular surface" },
        { fr: "Ligne soléaire", en: "Soleal line" },

        { fr: "Fibula / Péroné", en: "Fibula" },
        { fr: "Tête de la fibula", en: "Head of fibula" },
        { fr: "Col de la fibula", en: "Neck of fibula" },
        { fr: "Diaphyse", en: "Shaft" },
        { fr: "Malléole latérale", en: "Lateral malleolus" },
        { fr: "Apex de la fibula", en: "Apex of fibula" },

        { fr: "Patella / Rotule", en: "Patella" },
        { fr: "Base de la patella", en: "Base of patella" },
        { fr: "Apex de la patella", en: "Apex of patella" },
        { fr: "Surface articulaire", en: "Articular surface" },
        { fr: "Face antérieure", en: "Anterior surface" },

        { fr: "Calcanéus", en: "Calcaneus" },
        { fr: "Talus / Astragale", en: "Talus" },
        { fr: "Naviculaire / Scaphoïde", en: "Navicular bone" },
        { fr: "Cuboïde", en: "Cuboid" },
        { fr: "Cunéiformes (1-2-3)", en: "Cuneiforms (medial, intermediate, lateral)" },
        { fr: "Métatarsiens", en: "Metatarsals" },
        { fr: "Phalanges", en: "Phalanges" },
        { fr: "Sésamoïdes", en: "Sesamoids" },
        { fr: "Tubérosité du 5e métatarsien", en: "Tuberosity of 5th metatarsal" }
    ],
    "Articulations et Mouvements": [
        { fr: "Flexion", en: "Flexion" },
        { fr: "Extension", en: "Extension" },
        { fr: "Abduction", en: "Abduction" },
        { fr: "Adduction", en: "Adduction" },
        { fr: "Rotation interne", en: "Internal rotation" },
        { fr: "Rotation externe", en: "External rotation" },
        { fr: "Circumduction", en: "Circumduction" },
        { fr: "Pronation", en: "Pronation" },
        { fr: "Supination", en: "Supination" },
        { fr: "S’articuler avec", en: "Articulates with" },
        { fr: "Insertion musculaire", en: "Muscle insertion" },
        { fr: "Surface articulaire", en: "Articular surface" },
        { fr: "Saillie osseuse", en: "Bony prominence" },
        { fr: "Ligament", en: "Ligament" },
        { fr: "Tendon", en: "Tendon" }
    ],
    "Articulation de l’Épaule": [
        { fr: "Articulation scapulo-humérale", en: "Glenohumeral joint" },
        { fr: "Cavité glénoïde", en: "Glenoid cavity" },
        { fr: "Tête humérale", en: "Humeral head" },
        { fr: "Bourrelet glénoïdien", en: "Glenoid labrum" },
        { fr: "Capsule articulaire", en: "Articular capsule" },
        { fr: "Ligament coraco-huméral", en: "Coracohumeral ligament" },
        { fr: "Ligament gléno-huméral supérieur", en: "Superior glenohumeral ligament" },
        { fr: "Ligament gléno-huméral moyen", en: "Middle glenohumeral ligament" },
        { fr: "Ligament gléno-huméral inférieur", en: "Inferior glenohumeral ligament" },
        { fr: "Muscle supra-épineux", en: "Supraspinatus muscle" },
        { fr: "Muscle sous-scapulaire", en: "Subscapularis muscle" },
        { fr: "Muscle infra-épineux", en: "Infraspinatus muscle" },
        { fr: "Muscle petit rond", en: "Teres minor muscle" },
        { fr: "Synoviale", en: "Synovial membrane" }
    ],
    "Articulation du Coude": [
        { fr: "Articulation du coude", en: "Elbow joint" },
        { fr: "Articulation huméro-ulnaire", en: "Humeroulnar joint" },
        { fr: "Articulation humero-radiale", en: "Humeroradial joint" },
        { fr: "Articulation radio-ulnaire proximale", en: "Proximal radioulnar joint" },
        { fr: "Trochlée humérale", en: "Humeral trochlea" },
        { fr: "Capitulum", en: "Capitulum" },
        { fr: "Cupule radiale", en: "Radial head" },
        { fr: "Pourtour radial", en: "Radial circumference" },
        { fr: "Incisure trochléaire", en: "Trochlear notch" },
        { fr: "Incisure radiale", en: "Radial notch" },
        { fr: "Ligament annulaire", en: "Annular ligament" },
        { fr: "Capsule articulaire", en: "Articular capsule" },
        { fr: "Ligament collatéral ulnaire", en: "Ulnar collateral ligament" },
        { fr: "Ligament collatéral radial", en: "Radial collateral ligament" },
        { fr: "Ligament antérieur", en: "Anterior ligament" },
        { fr: "Ligament postérieur", en: "Posterior ligament" },
        { fr: "Ligament carré de Denuce", en: "Quadrate ligament of Denuce" },
        { fr: "Biceps brachial", en: "Biceps brachii" },
        { fr: "Triceps brachial", en: "Triceps brachii" },
        { fr: "Brachial antérieur", en: "Brachialis" },
        { fr: "Anconé", en: "Anconeus" },
        { fr: "Récessus coronoidien", en: "Coronoid recess" },
        { fr: "Récessus olécranien", en: "Olecranon recess" },
        { fr: "Récessus annulaire", en: "Annular recess" },
        { fr: "Récessus sacciforme", en: "Sacciform recess" },
        { fr: "Cubitus valgus", en: "Physiological cubitus" },
        { fr: "Epicondyle médial", en: "Medial epicondyle" },
        { fr: "Epicondyle latéral", en: "Lateral epicondyle" },
        { fr: "Olécrâne", en: "Olecranon" }
    ],
    "Articulation coxo-fémorale": [
        { fr: "Articulation coxo-fémorale", en: "Hip joint" },
        { fr: "Tête fémorale", en: "Femoral head" },
        { fr: "Fossette du ligament rond", en: "Fovea capitis" },
        { fr: "Acétabulum", en: "Acetabulum" },
        { fr: "Limbus acétabulaire", en: "Acetabular rim" },
        { fr: "Incisure acétabulaire", en: "Acetabular notch" },
        { fr: "Surface semi-lunaire", en: "Lunate surface" },
        { fr: "Fosse acétabulaire", en: "Acetabular fossa" },
        { fr: "Bourrelet acétabulaire", en: "Acetabular labrum" },
        { fr: "Ligament transverse", en: "Transverse ligament" },
        { fr: "Capsule articulaire", en: "Articular capsule" },
        { fr: "Ligne inter-trochantérigue", en: "Intertrochanteric line" },
        { fr: "Zone orbiculaire", en: "Orbicular zone" },
        { fr: "Ligament ilio-fémoral", en: "Iliofemoral ligament" },
        { fr: "Ligament pubo-fémoral", en: "Pubofemoral ligament" },
        { fr: "Ligament ischio-fémoral", en: "Ischiofemoral ligament" },
        { fr: "Ligament de la tête fémorale", en: "Ligament of the head of femur" },
        { fr: "Synoviale", en: "Synovial membrane" },
        { fr: "Flexion", en: "Flexion" },
        { fr: "Extension", en: "Extension" },
        { fr: "Abduction", en: "Abduction" },
        { fr: "Adduction", en: "Adduction" },
        { fr: "Rotation interne", en: "Internal rotation" },
        { fr: "Rotation externe", en: "External rotation" },
        { fr: "Circumduction", en: "Circumduction" }
    ],
    "Articulation du Genou": [
        { fr: "articulation du genou", en: "knee joint" },
        { fr: "fémur", en: "femur" },
        { fr: "tibia", en: "tibia" },
        { fr: "patella (rotule)", en: "patella (kneecap)" },
        { fr: "diarthrose", en: "diarthrosis" },
        { fr: "articulation fémoro-tibiale", en: "femorotibial joint" },
        { fr: "articulation fémoro-patellaire", en: "femoropatellar joint" },
        { fr: "ménisque", en: "meniscus" },
        { fr: "condyle", en: "condyle" },
        { fr: "cavité glénoïde", en: "glenoid cavity" },
        { fr: "épiphyse", en: "epiphysis" },
        { fr: "trochlée", en: "trochlea" },
        { fr: "fosse intercondylaire", en: "intercondylar fossa" },
        { fr: "capsule articulaire", en: "articular capsule" },
        { fr: "coques condyliennes", en: "condylar expansions" },
        { fr: "ligaments croisés", en: "cruciate ligaments" },
        { fr: "ligament croisé antérieur", en: "anterior cruciate ligament (ACL)" },
        { fr: "ligament croisé postérieur", en: "posterior cruciate ligament (PCL)" },
        { fr: "ligament collatéral médial", en: "medial collateral ligament (MCL)" },
        { fr: "ligament collatéral latéral (fibulaire)", en: "lateral collateral ligament (LCL)" },
        { fr: "ligament poplité oblique", en: "oblique popliteal ligament" },
        { fr: "ligament poplité arqué", en: "arcuate popliteal ligament" },
        { fr: "tendon du quadriceps", en: "quadriceps tendon" },
        { fr: "tendon rotulien", en: "patellar tendon" },
        { fr: "rétinaculum patellaire", en: "patellar retinaculum" },
        { fr: "tractus ilio-tibial", en: "iliotibial tract" },
        { fr: "fascia lata", en: "fascia lata" },
        { fr: "sartorius (couturier)", en: "sartorius" },
        { fr: "synoviale", en: "synovial membrane" },
        { fr: "bourses séreuses", en: "synovial bursae" },
        { fr: "rotation de la jambe", en: "leg rotation" },
        { fr: "prothèse totale du genou", en: "total knee prosthesis" }
    ],
    "Muscles du Membre Supérieur": [
        { fr: "Deltoïde", en: "Deltoid" },
        { fr: "Biceps brachial", en: "Biceps brachii" },
        { fr: "Triceps brachial", en: "Triceps brachii" },
        { fr: "Grand pectoral", en: "Pectoralis major" },
        { fr: "Petit pectoral", en: "Pectoralis minor" },
        { fr: "Subscapulaire", en: "Subscapularis" },
        { fr: "Infra-épineux", en: "Infraspinatus" },
        { fr: "Supra-épineux", en: "Supraspinatus" },
        { fr: "Grand dorsal", en: "Latissimus dorsi" },
        { fr: "Grand rond", en: "Teres major" },
        { fr: "Petit rond", en: "Teres minor" },
        { fr: "Brachial antérieur", en: "Brachialis" },
        { fr: "Brachio-radial", en: "Brachioradialis" },
        { fr: "Fléchisseur radial du carpe", en: "Flexor carpi radialis" },
        { fr: "Fléchisseur ulnaire du carpe", en: "Flexor carpi ulnaris" },
        { fr: "Extenseur des doigts", en: "Extensor digitorum" }
    ],
    "Muscles du Membre Inférieur": [
        { fr: "!lio-psoas", en: "Iliopsoas" },
        { fr: "Grand fessier", en: "Gluteus maximus" },
        { fr: "Moyen fessier", en: "Gluteus medius" },
        { fr: "Petit fessier", en: "Gluteus minimus" },
        { fr: "Tenseur du fascia lata", en: "Tensor fasciae latae" },
        { fr: "Sartorius", en: "Sartorius" },
        { fr: "Quadriceps fémoral", en: "Quadriceps femoris" },
        { fr: "Droit fémoral", en: "Rectus femoris" },
        { fr: "Vaste médial", en: "Vastus medialis" },
        { fr: "Vaste latéral", en: "Vastus lateralis" },
        { fr: "Ischio-jambiers", en: "Hamstrings" },
        { fr: "Biceps fémoral", en: "Biceps femoris" },
        { fr: "Semi-tendineux", en: "Semitendinosus" },
        { fr: "Semi-membraneux", en: "Semimembranosus" },
        { fr: "Castrocnémien", en: "Gastrocnemius" },
        { fr: "Soléaire", en: "Soleus" },
        { fr: "Tibial antérieur", en: "Tibialis anterior" },
        { fr: "Long extenseur des orteils", en: "Extensor digitorum longus" },
        { fr: "Long fléchisseur de l'hallux", en: "Flexor hallucis longus" }
    ],
    "Vascularisation & Lymphatiques du Membre Supérieur": [
        { fr: "veine", en: "vein" },
        { fr: "artère", en: "artery" },
        { fr: "vaisseaux sanguins", en: "blood vessels" },
        { fr: "drainage veineux", en: "venous drainage" },
        { fr: "réseau veineux superficiel", en: "superficial venous network" },
        { fr: "réseau veineux profond", en: "deep venous network" },
        { fr: "veine radiale", en: "radial vein" },
        { fr: "veine ulnaire", en: "ulnar vein" },
        { fr: "veine brachiale", en: "brachial vein" },
        { fr: "veine axillaire", en: "axillary vein" },
        { fr: "veine céphalique", en: "cephalic vein" },
        { fr: "veine basilique", en: "basilic vein" },
        { fr: "veine médiane de l'avant-bras", en: "median antebrachial vein" },
        { fr: "veines digitales", en: "digital veins" },
        { fr: "veines métacarpiennes", en: "metacarpal veins" },
        { fr: "arcade veineuse dorsale", en: "dorsal venous arch" },
        { fr: "veine salvatelle", en: "salvatella vein" },
        { fr: "pli du coude", en: "elbow crease" },
        { fr: "anastomose", en: "anastomosis" },
        { fr: "aponévrose", en: "aponeurosis" },
        { fr: "système valvulaire", en: "valvular system" },
        { fr: "drainage lymphatique", en: "lymphatic drainage" },
        { fr: "vaisseaux lymphatiques", en: "lymphatic vessels" },
        { fr: "ganglions lymphatiques", en: "lymph nodes" },
        { fr: "noeuds lymphatiques profonds", en: "deep lymph nodes" },
        { fr: "noeuds lymphatiques superficiels", en: "superficial lymph nodes" },
        { fr: "noeuds axillaires", en: "axillary lymph nodes" },
        { fr: "noeuds infra-claviculaires", en: "infraclavicular lymph nodes" },
        { fr: "noeuds sus-épicondyliens", en: "supracondylar lymph nodes" },
        { fr: "noeuds delto-pectoraux", en: "deltopectoral lymph nodes" },
        { fr: "creux axillaire", en: "axillary hollow" },
        { fr: "tabatière anatomique", en: "anatomical snuffbox" },
        { fr: "fascia", en: "fascia" }
    ],
    "Vascularisation & Lymphatiques du Membre Inférieur": [
        { fr: "Artère fémorale", en: "Femoral artery" },
        { fr: "Artère fémorale profonde", en: "Deep femoral artery" },
        { fr: "Artère fibulaire", en: "Fibular artery (Peroneal artery)" },
        { fr: "Artère glutéale inférieure", en: "Inferior gluteal artery" },
        { fr: "Artère glutéale supérieure", en: "Superior gluteal artery" },
        { fr: "Artère iliaque externe", en: "External iliac artery" },
        { fr: "Artère iliaque interne (hypogastrique)", en: "Internal iliac artery (hypogastric artery)" },
        { fr: "Artère obturatrice", en: "Obturator artery" },
        { fr: "Artère poplitée", en: "Popliteal artery" },
        { fr: "Artère pudendale (honteuse) interne", en: "Internal pudendal artery" },
        { fr: "Artère tibiale antérieure", en: "Anterior tibial artery" },
        { fr: "Artère tibiale postérieure", en: "Posterior tibial artery" },
        { fr: "Artères du pied", en: "Arteries of the foot" },
        { fr: "Branches collatérales", en: "Collateral branches" },
        { fr: "Cercle artériel du genou", en: "Arterial circle of the knee" },
        { fr: "Système artériel", en: "Arterial system" },
        { fr: "Vascularisation artérielle", en: "Arterial vascularization" },
        { fr: "Arcade veineuse dorsale", en: "Dorsal venous arch" },
        { fr: "Arcade veineuse plantaire", en: "Plantar venous arch" },
        { fr: "Drainage veineux", en: "Venous drainage" },
        { fr: "Jonction saphèno-fémorale", en: "Saphenofemoral junction" },
        { fr: "Petite veine saphène (saphène externe)", en: "Small saphenous vein (external saphenous vein)" },
        { fr: "Grande veine saphène (saphène interne)", en: "Great saphenous vein (internal saphenous vein)" },
        { fr: "Système veineux profond", en: "Deep venous system" },
        { fr: "Système veineux superficiel", en: "Superficial venous system" },
        { fr: "Veine fémorale", en: "Femoral vein" },
        { fr: "Veine fémorale profonde", en: "Deep femoral vein" },
        { fr: "Veine fibulaire", en: "Fibular vein" },
        { fr: "Veine glutéale inférieure", en: "Inferior gluteal vein" },
        { fr: "Veine glutéale supérieure", en: "Superior gluteal vein" },
        { fr: "Veine iliaque externe", en: "External iliac vein" },
        { fr: "Veine iliaque interne", en: "Internal iliac vein" },
        { fr: "Veine poplitée", en: "Popliteal vein" },
        { fr: "Veine tibiale antérieure", en: "Anterior tibial vein" },
        { fr: "Veine tibiale postérieure", en: "Posterior tibial vein" },
        { fr: "Veines perforantes", en: "Perforating veins" },
        { fr: "Valvules (veineuses)", en: "Valves (venous)" },
        { fr: "Drainage lymphatique", en: "Lymphatic drainage" },
        { fr: "Ganglions lymphatiques", en: "Lymph nodes" },
        { fr: "Lymphonoeuds inguinaux profonds", en: "Deep inguinal lymph nodes" },
        { fr: "Lymphonoeuds inguinaux superficiels", en: "Superficial inguinal lymph nodes" },
        { fr: "Lymphonoeuds poplités profonds", en: "Deep popliteal lymph nodes" },
        { fr: "Lymphonoeuds poplités superficiels", en: "Superficial popliteal lymph nodes" },
        { fr: "Système lymphatique", en: "Lymphatic system" },
        { fr: "Vaisseaux lymphatiques profonds", en: "Deep lymphatic vessels" },
        { fr: "Vaisseaux lymphatiques superficiels", en: "Superficial lymphatic vessels" },
        { fr: "Canal des adducteurs (canal de Hunter)", en: "Adductor canal (Hunter's canal)" },
        { fr: "Canal fémoral", en: "Femoral canal" },
        { fr: "Fosse poplitée", en: "Popliteal fossa" },
        { fr: "Hiatus du grand adducteur", en: "Hiatus of the adductor magnus" },
        { fr: "Ligament inguinal", en: "Inguinal ligament" },
        { fr: "Lacune vasculaire", en: "Vascular lacuna" },
        { fr: "Membre inférieur", en: "Lower limb" },
        { fr: "Trigone fémoral (triangle de Scarpa)", en: "Femoral triangle (Scarpa's triangle)" }
    ]


};



let currentChapter = 'chapter1';

function loadChapter(chapter) {
    currentChapter = chapter;
    displayWords(chapters[chapter]);
}

function displayWords(words) {
    const container = document.getElementById("dictionary");
    container.innerHTML = "";

    words.forEach((entry) => {
        const key = `${currentChapter}-${entry.fr}`;
        const isFavorite = localStorage.getItem(`fav-${key}`) === 'true';

        const div = document.createElement("div");
        div.className = "word-entry";
        div.innerHTML = `
            <div class="front"><strong>${entry.fr}</strong></div>
            <div class="back">${entry.en}</div>
            <div class="favorite">${isFavorite ? "⭐" : "☆"}</div>
        `;

        div.addEventListener("click", () => {
            div.classList.toggle("flipped");

            const existingVideo = div.querySelector("video");
            if (existingVideo) existingVideo.remove();

            const termsWithVideos = {
                "Muscles du Membre Supérieur:Petit pectoral": "petit-pectoral.mp4",
                "Muscles du Membre Supérieur:Subscapulaire": "subscapulaire.mp4",
                "Muscles du Membre Supérieur:Deltoïde": "deltoide.mp4",
                "Muscles du Membre Supérieur:Biceps brachial": "Biceps brachial.mp4",
                "Muscles du Membre Supérieur:Triceps brachial": "Triceps brachial.mp4",
                "Muscles du Membre Supérieur:Grand pectoral": "Grand pectoral.mp4",
                "Muscles du Membre Supérieur:Infra-épineux": "Infra-épineux.mp4",
                "Muscles du Membre Supérieur:Supra-épineux": "Supra-épineux.mp4",
                "Muscles du Membre Supérieur:Grand dorsal": "Grand dorsal.mp4",
                "Muscles du Membre Supérieur:Grand rond": "Grand rond.mp4",
                "Muscles du Membre Supérieur:Petit rond": "Petit rond.mp4",
                "Muscles du Membre Supérieur:Brachial antérieur": "Brachial antérieur.mp4",
                "Muscles du Membre Inférieur:Tibial antérieur": "Tibial-antérieur.mp4",
                "Ostéologie – Membre Supérieur:Clavicule": "clavicule.mp4"
            };

            const videoKey = `${currentChapter}:${entry.fr}`;

            if (termsWithVideos[videoKey] && div.classList.contains("flipped")) {
                const video = document.createElement("video");
                video.src = termsWithVideos[videoKey];
                video.controls = true;
                video.autoplay = true;
                video.muted = true;
                video.style.marginTop = "10px";
                video.style.maxWidth = "100%";
                div.appendChild(video);
            }
        });

        div.querySelector(".favorite").addEventListener("click", (e) => {
            e.stopPropagation();
            const star = e.target;
            const isFav = star.textContent === "⭐";
            star.textContent = isFav ? "☆" : "⭐";
            localStorage.setItem(`fav-${key}`, !isFav);
        });

        container.appendChild(div);
    });
}

// Search
document.getElementById("search").addEventListener("input", function() {
    const value = this.value.toLowerCase();
    const filtered = chapters[currentChapter].filter(entry =>
        entry.fr.toLowerCase().includes(value) ||
        entry.en.toLowerCase().includes(value)
    );
    displayWords(filtered);
});

// Dark mode toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("change", function() {
    if (this.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    }
});

// Favorites
document.getElementById("favoritesBtn").addEventListener("click", () => {
    const container = document.getElementById("dictionary");
    container.innerHTML = "";

    const allFavorites = chapters[currentChapter].filter(entry =>
        localStorage.getItem(`fav-${currentChapter}-${entry.fr}`) === 'true'
    );

    if (allFavorites.length === 0) {
        container.innerHTML = "<p style='font-size: 18px; margin-top: 20px; text-align: center;'>⭐ Aucun mot favori pour l'instant.</p>";
    } else {
        displayWords(allFavorites);
    }
});

// ✅ Corrected SINGLE window.onload
window.onload = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.checked = true;
    }
    loadChapter(currentChapter);
};