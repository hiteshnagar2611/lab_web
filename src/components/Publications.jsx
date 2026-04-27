import React from 'react';

const Publications = () => {
    const publications = [
        {
            number: 1,
            citation: (
                <>
                    Cheng MTK, Altaf M, Castin J, Reuschl AK, Sievers BL, Kamelian K, Mesner D, Morse RB, Abdullahi A, Meng B, Csiba K, Cambridge NIHR Bioresource, Kemp SA, Martin DP, Jolly C, Ruis C, Thukral L*, Gupta RK*. <span className="font-semibold">Signatures of omicron-like adaptation in early SARS-CoV-2 variants and chronic infection.</span> Cell Rep. 2025 Aug 26;44(8):116135.
                </>
            ),
            doi: "10.1016/j.celrep.2025.116135"
        },
        {
            number: 2,
            citation: (
                <>
                    Rathore S, Gahlot D, Castin J, Pandey A, Arvindekar S, Viswanath S, Thukral L*. <span className="font-semibold">Multiscale simulations reveal architecture of NOTCH protein and ligand specific features.</span> Biophys J. 2025 Jan 21;124(2):393-407.
                </>
            ),
            doi: "10.1016/j.bpj.2024.12.014"
        },
        {
            number: 3,
            citation: (
                <>
                    Das D, Sharma M, Gahlot D, Nia SS, Gain C, Mecklenburg M, Zhou ZH, Bourdenx M, Thukral L, Martinez-Lopez N, Singh R. <span className="font-semibold">VPS4A is the selective receptor for lipophagy in mice and humans.</span> Mol Cell. 2024 Nov 21;84(22):4436-4453.e8.
                </>
            ),
            doi: "10.1016/j.molcel.2024.10.022"
        },
        {
            number: 4,
            citation: (
                <>
                    Neha, Castin J, Fatihi S, Gahlot D, Arun A, Thukral L*.<span className="font-semibold"> Autophagy 3D: a comprehensive autophagy structure database. Database (Oxford).</span> 2024;2024:baae088.
                </>
            ),
            doi: "10.1093/database/baae088"
        },
        {
            number: 5,
            citation: (
                <>
                    Montero-Vergara J, Plachetta K, Kinch L, Bernhardt S, Kashyap K, Levine B, Thukral L, Vetter M, Thomssen C, Wiemann S, Peña-Llopis S, Jendrossek V, Vega-Rubin-de-Celis S. <span className="font-semibold">GRB2 is a BECN1 interacting protein that regulates autophagy. Cell Death Dis. 2024 Jan.</span> 5;15(1):14.
                </>
            ),
            doi: "10.1038/s41419-023-06387-7"
        },
        {
            number: 6,
            citation: (
                <>
                    Menon D, Bhapkar A, Manchandia B, Charak G, Rathore S, Jha RM, Nahak A, Mondal M, Omrane M, Bhaskar AK, Thukral L, Thiam AR, Gandotra S.<span className="font-semibold"> ARL8B mediates lipid droplet contact and delivery to lysosomes for lipid remobilization.</span> Cell Rep. 2023 Sep 30;42(10):113203.
                </>
            ),
            doi: "10.1016/j.celrep.2023.113203"
        },
        {
            number: 7,
            citation: (
                <>
                    Malhotra N, Khatri S, Kumar A, Arun A, Daripa P, Fatihi S, Venkadesan S, Jain N, Thukral L*. <span className="font-semibold">AI-based Alphafold2 significantly expands the structural space of the autophagy pathway.</span> Autophagy. 2023 Jul 30:1-20.
                </>
            ),
            doi: "10.1080/15548627.2023.2238578"
        },
        {
            number: 8,
            citation: (
                <>
                    Zhang W, Nishimura T, Gahlot D, Saito C, David C, Jefferies HBJ, Schreiber A, Thukral L, Tooze SA.<span className="font-semibold"> Autophagosome membrane expansion is mediated by the N-terminal and cis-membrane association of human ATG8s.</span> eLife. 2023;12:e89185.
                </>
            ),
            doi: "10.7554/eLife.89185"
        },
        {
            number: 9,
            citation: (
                <>
                    Tooze SA, Zhang W, Lazzeri G, Gahlot D, Thukral L, Covino R, Nishimura T. <span className="font-semibold">Membrane association of ATG8 conjugation machinery emerges as a key regulatory feature for autophagosome biogenesis.</span> FEBS Lett. 2023;
                </>
            ),
            doi: "10.1002/1873-3468.14676"
        },
        {
            number: 10,
            citation: (
                <>
                    Subissi L, Gottberg AV, Thukral L, et al.<span className="font-semibold"> An early warning system for emerging SARS-CoV-2 variants.</span> Nat Med. 2022;28(6):1110-1115.
                </>
            ),
            doi: "10.1038/s41591-022-01836-w"
        },

        {
            number: 11,
            citation: (
                <>
                    Meng B, Abdullahi A, Ferreira IATM, Goonawardane N, Saito A, Kimura I, Yamasoba D, Gerber PP, Fatihi S, Rathore S, Zepeda SK, Papa G, Kemp SA, Ikeda T, Toyoda M, Tan TS, Kuramochi J, Mitsunaga S, Ueno T, Castillo-Olivares J, Pinto D, Irie T, Sotomayor-González A, Sserunkuma J, Selhorst P, Mlcochova P, Madissoon E, Thukral L, et al. <span className="font-semibold">Altered TMPRSS2 usage by SARS-CoV-2 Omicron impacts tropism and fusogenicity.</span> Nature. 2022 Mar;603(7902):706-714.
                </>
            ),
            doi: "10.1038/s41586-022-04474-x"
        },
        {
            number: 12,
            citation: (
                <>
                    Pathak AK, Mishra GP, Uppili B, Walia S, Fatihi S, Abbas T, Banu S, Ghosh A, Kanampalliwar A, Jha A, Fatima S, Aggarwal S, Dhar MS, Marwal R, Radhakrishnan VS, Ponnusamy K, Kabra S, Rakshit P, Bhoyar RC, Jain A, Divakar MK, Imran M, Faruq M, Sowpati DT, Thukral L, Raghav SK, Mukerji M. <span className="font-semibold">Spatio-temporal dynamics of intra-host variability in SARS-CoV-2 genomes. Nucleic Acids Res.</span> 2022 Feb 28;50(3):1551-1561.
                </>
            ),
            doi: "10.1093/nar/gkab1297"
        },
        {
            number: 13,
            citation: (
                <>
                    Paul S, Fatihi S, Sharma S, Kutum R, Fields R, Pant HC, Thukral L, Binukumar BK. <span className="font-semibold">Cyclin dependent kinase 5 regulates cPLA2 activity and neuroinflammation in Parkinson's disease.</span> eNeuro. 2022;9(5):ENEURO.0180-22.2022.
                </>
            ),
            doi: "10.1523/ENEURO.0180-22.2022"
        },
        {
            number: 14,
            citation: (
                <>
                    Fatihi S, Rathore S, Pathak A, Gahlot D, Mukerji M, Jatana N, Thukral L*. <span className="font-semibold">A rigorous framework for detecting SARS-CoV-2 spike protein mutational ensemble from genomic and structural features.</span> Curr Res Struct Biol. 2021;3:290-300.
                </>
            ),
            doi: "10.1016/j.crstbi.2021.11.002"
        },
        {
            number: 15,
            citation: (
                <>
                    Dhar MS, Marwal R, Radhakrishnan VS, Ponnusamy K, Jolly B, Bhoyar RC, Sardana V, Naushin S, Rophina M, Mellan TA, Mishra S, Whittaker C, Fatihi S, Datta M, Singh P, Sharma U, Ujjainiya R, Bhatheja N, Divakar MK, Singh MK, Imran M, Senthivel V, Maurya R, Jha N, Mehta P, A V, Jha AN, Madan P, Ram VS, Singh P, Sharma P, Sharma P, Faruq M, Thukral L, et al. <span className="font-semibold"> Genomic characterization and epidemiology of an emerging SARS-CoV-2 variant in Delhi, India.</span> Science. 2021 Nov 19;374(6570):995-999.
                </>
            ),
            doi: "10.1126/science.abj9932"
        },
        {
            number: 16,
            citation: (
                <>
                    Shastri J, Parikh S, Agrawal S, Chatterjee N, Pathak M, Chaudhary S, Sharma C, Kanakan A, AV, Vasudevan JS, Maurya R, Fatihi S, Thukral L, Agrawal A, Pinto L, Pandey R, Sunil S.<span className="font-semibold"> Clinical, serological, and whole genome sequence analyses to confirm SARS-CoV-2 reinfection in patients from Mumbai, India.</span> Front Med (Lausanne). 2021;8:631769.
                </>
            ),
            doi: "10.3389/fmed.2021.631769"
        },
        {
            number: 17,
            citation: (
                <>
                    Klionsky DJ, Abdel-Aziz AK, Abdelfatah S, Abdellatif M, Abdoli A, Abel S, Abeliovich H, Abildgaard MH, Abudu YP, Acevedo-Arozena A, Achar SR, Achenbach J, Acker H, Adamopoulos IE, Adams CM, Adams PD, Adeli K, Adolph TE, Adornetto A, … Thukral L, et al. <span className="font-semibold">Guidelines for the use and interpretation of assays for monitoring autophagy </span>(4th edition). Autophagy. 2021;17(1):1-382.
                </>
            ),
            doi: "10.1080/15548627.2020.1797280"
        },
        {
            number: 18,
            citation: (
                <>
                    Kumar P, Pandey R, Sharma P, Dhar MS, AV, Uppili B, Vashisht H, Wadhwa S, Tyagi N, Fatihi S, Sharma U, Singh P, Lall H, Datta M, Gupta P, Saini N, Tewari A, Nandi B, Kumar D, Bag S, Gahlot D, Rathore S, Jatana N, Jaiswal V, Gogia H, Madan P, Singh S, Singh P, Dash D, Bala M, Kabra S, Singh S, Mukerji M, Thukral L, Faruq M, Agrawal A, Rakshit P. <span className="font-semibold"> Integrated genomic view of SARS-CoV-2 in India. </span>Wellcome Open Res. 2020;5:184.
                </>
            ),
            doi: "10.12688/wellcomeopenres.16119.1"
        },
        {
            number: 19,
            citation: (
                <>
                    Jatana N, Aswin SK, Rathore S, Thukral L*. <span className="font-semibold">Revealing conformational transitions in G-protein-coupled receptor rhodopsin upon phosphorylation. </span>Biochemistry. 2020 Jan 28;59(3):297-302.
                </>
            ),
            doi: "10.1021/acs.biochem.9b00884"
        },
        {
            number: 20,
            citation: (
                <>
                    Jatana N, Ascher DB, Pires DEV, Gokhale RS, Thukral L*.<span className="font-semibold"> Human LC3 and GABARAP subfamily members achieve functional specificity via specific structural modulations.</span> Autophagy. 2020 Feb;16(2):239-255.
                </>
            ),
            doi: "10.1080/15548627.2019.1606636"
        },
        {
            number: 21,
            citation: (
                <>
                    Chua NK, Howe V, Jatana N, Hart-Smith G, Scott AN, Thukral L, Brown AJ. <span className="font-semibold">Squalene monooxygenase at the nexus between cholesterol homeostasis and proteostasis.</span> FASEB J. 2020 Apr;34(S1):1-1
                </>
            ),
            doi: "10.1096/fasebj.2020.34.s1.03280"
        },
        {
            number: 22,
            citation: (
                <>
                    Grover R, Burse SA, Shankrit S, Aggarwal A, Kirty K, Narta K, Srivastav R, Ray AK, Malik G, Vats A, Motiani RK, Thukral L, Roy SS, Bhattacharya S, Sharma R, Natarajan K, Mukerji M, Pandey R, Gokhale RS, Natarajan VT.<span className="font-semibold"> Myg1 exonuclease couples the nuclear and mitochondrial translational programs through RNA processing.</span> Nucleic Acids Res. 2019 Jun 20;47(11):5852-5866.
                </>
            ),
            doi: "10.1093/nar/gkz371"
        },
        {
            number: 23,
            citation: (
                <>
                    Mitra M, Asad M, Kumar S, Yadav K, Chaudhary S, Bhavesh NS, Khalid S, Thukral L*, Bajaj A*. <span className="font-semibold">Distinct intramolecular hydrogen bonding dictates antimicrobial action of membrane-targeting amphiphiles.</span> J Phys Chem Lett. 2019 Feb 21;10(4):754-760.
                </>
            ),
            doi: "10.1021/acs.jpclett.8b03508"
        },
        {
            number: 24,
            citation: (
                <>
                    Panchal V, Jatana N, Malik A, Taneja B, Pal R, Bhatt A, Besra GS, Thukral L, Chaudhary S, Rao V.<span className="font-semibold"> A novel mutation alters the stability of PapA2 resulting in the complete abrogation of sulfolipids in clinical mycobacterial strains.</span> Tuberculosis (Edinb). 2019;115:306-319.
                </>
            ),
            doi: "10.1096/fba.2018-00039"
        },
        {
            number: 25,
            citation: (
                <>
                    Yadav K, Kumar S, Mishra D, Asad M, Mitra M, Yavvari PS, Gupta S, Vedantham M, Ranga P, Komalla V, Pal S, Sharma P, Kapil A, Singh A, Singh N, Srivastava A, Thukral L*, Bajaj A*. <span className="font-semibold">Deciphering the role of intramolecular networking in cholic acid-peptide conjugates on the lipopolysaccharide surface in combating Gram-negative bacterial infections.</span> J Med Chem. 2019 Feb 28;62(4):1875-1886.
                </>
            ),
            doi: "10.1021/acs.jmedchem.8b01357"
        },
        {
            number: 26,
            citation: (
                <>
                    Ray A, Ghosh A, Chakraborty R, Upadhyay SK, Maiti S, Sengupta S*, Thukral L*. <span className="font-semibold">Specific cholesterol binding drives drastic structural alterations in apolipoprotein A1.</span> J Phys Chem Lett. 2018 Oct 18;9(20):6060-6065.
                </>
            ),
            doi: "10.1021/acs.jpclett.8b02042"
        },
        {
            number: 27,
            citation: (
                <>
                    Ray A, Gräter F*, Thukral L*. <span className="font-semibold">Probing molecular forces in multi-component physiological membranes. Phys Chem Chem Phys.</span> 2018 Jan 21;20(3):2155-2161.
                </>
            ),
            doi: "10.1039/C7CP05981G"
        },
        {
            number: 28,
            citation: (
                <>
                    Ray A, Jatana N, Thukral L*. <span className="font-semibold">Lipidated proteins: spotlight on protein-membrane interfaces.</span> Prog Biophys Mol Biol. 2017 May;128:74-84.
                </>
            ),
            doi: "10.1016/j.pbiomolbio.2017.01.002"
        },
        {
            number: 29,
            citation: (
                <>
                    Chua NK, Howe V, Jatana N, Thukral L, Brown AJ.<span className="font-semibold"> A conserved degron containing an amphipathic helix regulates the cholesterol-mediated turnover of human squalene monooxygenase, a rate-limiting enzyme in cholesterol synthesis.</span> J Biol Chem. 2017 Mar 31;292(13):5198-5211.
                </>
            ),
            doi: "10.1074/jbc.M117.794230"
        },
        {
            number: 30,
            citation: (
                <>
                    Singh A, Gotherwal V, Junni P, Vijayan V, Tiwari M, Ganju P, Kumar A, Sharma P, Fatima T, Gupta A, Holla A, Kar HK, Khanna S, Thukral L, Malik G, Natarajan K, Gadgil CJ, Lahesmaa R, Natarajan VT, Rani R, Gokhale RS. <span className="font-semibold">Mapping architectural and transcriptional alterations in non-lesional and lesional epidermis in vitiligo.</span> Sci Rep. 2017 Aug 30;7(1):9860.
                </>
            ),
            doi: "10.1038/s41598-017-10253-w"
        },
        {
            number: 31,
            citation: (
                <>
                    Ramkumar A, Murthy D, Raja DA, Singh A, Krishnan A, Khanna S, Vats A, Thukral L, Sharma P, Sivasubbu S, Rani R, Natarajan VT, Gokhale RS.<span className="font-semibold"> Classical autophagy proteins LC3B and ATG4B facilitate melanosome movement on cytoskeletal tracks.</span> Autophagy. 2017;13(8):1331-1347.
                </>
            ),
            doi: "10.1080/15548627.2017.1327509"
        },
        {
            number: 32,
            citation: (
                <>
                    Daidone I, Zanetti-Polzi L, Thukral L, Alekozai E, Amadei A. <span className="font-semibold">Theoretical-computational characterization of the temperature-dependent folding thermodynamics of a beta-hairpin peptide. Chem Phys Lett.</span> 2016 Aug 30;659:247-251.
                </>
            ),
            doi: "10.1016/j.cplett.2016.07.041"
        },
        {
            number: 33,
            citation: (
                <>
                    Jatana N, Thukral L*, Latha N*.<span className="font-semibold"> Structural signatures of DRD4 mutants revealed using molecular dynamics simulations: implications for drug targeting.</span> J Mol Model. 2016 Jan;22(1):14.
                </>
            ),
            doi: "10.1007/s00894-015-2868-x"
        },
        {
            number: 34,
            citation: (
                <>
                    Nagpal S, Tiwari S, Mapa K*, Thukral L*.<span className="font-semibold"> Decoding structural properties of a partially unfolded protein substrate: en route to chaperone binding.</span> PLoS Comput Biol. 2015 Sep;11(9):e1004496.
                </>
            ),
            doi: "10.1371/journal.pcbi.1004496"
        },
        {
            number: 35,
            citation: (
                <>
                    Thukral L*, Sengupta D, Ramkumar A, Murthy D, Agrawal N, Gokhale RS*. <span className="font-semibold">Molecular mechanism underlying recruitment and insertion of lipid-anchored LC3 proteins into membranes.</span> Biophys J. 2015 Nov 17;109(10):2067-2078.
                </>
            ),
            doi: "10.1016/j.bpj.2015.09.022"
        },
        {
            number: 36,
            citation: (
                <>
                    Srivastava S, Chaudhary S, Thukral L, Shi C, Gupta RD, Gupta R, Priyadarshan K, Vats A, Haque AS, Sankaranarayanan R, Natarajan VT, Sharma R, Aldrich CC, Gokhale RS.<span className="font-semibold"> Unsaturated lipid assimilation by Mycobacteria requires auxiliary cis-trans enoyl-CoA isomerase.</span> Chem. Biol. 2015 Oct 9;290(41):25160-25172.
                </>
            ),
            doi: "10.1016/j.chembiol.2015.10.009"
        },
        {
            number: 37,
            citation: (
                <>
                    Thukral L, Schwarze S, Daidone I, Neuweiler H.<span className="font-semibold"> Beta-structure within the denatured state of the helical protein domain BBL. J Mol Biol.</span> 2015 Oct 9;427(19):3166-3176.
                </>
            ),
            doi: "10.1016/j.jmb.2015.08.007"
        },
        {
            number: 38,
            citation: (
                <>
                    Silla Y, Ray A, Thukral L, Sengupta S. <span className="font-semibold">Molecular modeling indicates that homocysteine induces conformational changes in the structure of putative target proteins.</span> J Proteins Proteomics. 2015;6(3):271-286.
                </>
            ),
            doi: "Missing"
        },
        {
            number: 39,
            citation: (
                <>
                    Jatana N, Thukral L*, Latha N*. <span className="font-semibold">Structure and dynamics of DRD4 bound to an agonist and an antagonist using in silico approaches.</span> Proteins. 2015 May;83(5):867-880.
                </>
            ),
            doi: "10.1002/prot.24716"
        },
        {
            number: 40,
            citation: (
                <>
                    Daidone I, Thukral L, Smith JC, Amadei A. <span className="font-semibold">Monitoring the folding kinetics of a beta-hairpin by time-resolved IR spectroscopy in silico.</span> J Phys Chem B. 2015 Apr 9;119(14):4849-4856.
                </>
            ),
            doi: "10.1021/acs.jpcb.5b01477"
        },
        {
            number: 41,
            citation: (
                <>
                    Thukral L, Daidone I, Smith JC. <span className="font-semibold">Structured pathway across the transition state for peptide folding revealed by molecular dynamics simulations.</span> PLoS Comput Biol. 2011 Sep;7(9):e1002137.
                </>
            ),
            doi: "10.1371/journal.pcbi.1002137"
        },
        {
            number: 42,
            citation: (
                <>
                    Thukral L, Smith CJ, Daidone I. <span className="font-semibold">Common folding mechanism of a β-hairpin peptide via non-native turn formation revealed by unbiased molecular dynamics simulations.</span> J Am Chem Soc. 2009 Dec 23;131(50):18147-18152.
                </>
            ),
            doi: "10.1021/ja9064365"
        },
        {
            number: 43,
            citation: (
                <>
                    Thukral L, Shenoy SR, Bhushan K, Jayaram B. <span className="font-semibold">ProRegIn: a regularity index for the selection of native-like tertiary structures of proteins.</span> J Biosci. 2007 Mar;32(1):71-81.
                </>
            ),
            doi: "10.1007/s12038-007-0007-2"
        },
    ];
    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Publications</h1>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <ol reversed className="list-decimal list-inside space-y-6 text-gray-800">
                            <p className="text-sm text-gray-600 mb-4">&nbsp;&nbsp;&nbsp;&nbsp; *corresponding author</p>
                            {publications.map((pub) => (
                                <li key={pub.number} className="mb-4">
                                    {pub.citation}
                                    <br />
                                    DOI: <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{pub.doi}</a>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Publications;