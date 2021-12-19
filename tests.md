# Tests


## 01a-Pitches-Pitches.png
<p>All pitches from G to c”” in ascending steps; First without accidentals, then with a sharp and then with a flat accidental. Double alterations and cautionary accidentals are tested at the end. </p>

### Unofficial lilypond MusicXML render
![01a-Pitches-Pitches.png-lilypond](./lilypond-musicxml/01a-Pitches-Pitches.png)
### Verovio Humdrum Viewer render
![01a-Pitches-Pitches.png-vhv](./kern-images/01a-Pitches-Pitches.png),

## 01b-Pitches-Intervals.png
<p>All pitch intervals in ascending jump size. </p>

### Unofficial lilypond MusicXML render
![01b-Pitches-Intervals.png-lilypond](./lilypond-musicxml/01b-Pitches-Intervals.png)
### Verovio Humdrum Viewer render
![01b-Pitches-Intervals.png-vhv](./kern-images/01b-Pitches-Intervals.png),

## 01c-Pitches-NoVoiceElement.png
<p>The <voice> element of notes is optional in MusicXML (although Dolet always writes it out). Here, there is one note with lyrics, but without a voice assigned. It should still be correctly converted. </p>

### Unofficial lilypond MusicXML render
![01c-Pitches-NoVoiceElement.png-lilypond](./lilypond-musicxml/01c-Pitches-NoVoiceElement.png)
### Verovio Humdrum Viewer render
![01c-Pitches-NoVoiceElement.png-vhv](./kern-images/01c-Pitches-NoVoiceElement.png),

## 01d-Pitches-Microtones.png
<p>Some microtones: c flat-and-a-half, d half-flat, e half-sharp, f sharp-and-a half. Once in the lower and once in the upper region of the staff. </p>

### Unofficial lilypond MusicXML render
![01d-Pitches-Microtones.png-lilypond](./lilypond-musicxml/01d-Pitches-Microtones.png)
### Verovio Humdrum Viewer render
![01d-Pitches-Microtones.png-vhv](./kern-images/01d-Pitches-Microtones.png),

## 01e-Pitches-ParenthesizedAccidentals.png
<p>Accidentals can be cautionary or editorial. Each measure has a normal accidental, an editorial, a cautionary and an editioal and cautionary accidental. </p>

### Unofficial lilypond MusicXML render
![01e-Pitches-ParenthesizedAccidentals.png-lilypond](./lilypond-musicxml/01e-Pitches-ParenthesizedAccidentals.png)
### Verovio Humdrum Viewer render
![01e-Pitches-ParenthesizedAccidentals.png-vhv](./kern-images/01e-Pitches-ParenthesizedAccidentals.png),

## 01f-Pitches-ParenthesizedMicrotoneAccidentals.png
<p>Microtone accidentals can be cautionary or editorial. Each measure has a normal accidental, an editorial, a cautionary and an editioal and cautionary accidental. </p>

### Unofficial lilypond MusicXML render
![01f-Pitches-ParenthesizedMicrotoneAccidentals.png-lilypond](./lilypond-musicxml/01f-Pitches-ParenthesizedMicrotoneAccidentals.png)
### Verovio Humdrum Viewer render
![01f-Pitches-ParenthesizedMicrotoneAccidentals.png-vhv](./kern-images/01f-Pitches-ParenthesizedMicrotoneAccidentals.png),

## 02a-Rests-Durations.png
<p>All different rest lengths: A two-bar multi-measure rest, a whole rest, a half, etc. until a 128th-rest; Then the same with dotted durations. </p>

### Unofficial lilypond MusicXML render
![02a-Rests-Durations.png-lilypond](./lilypond-musicxml/02a-Rests-Durations.png)
### Verovio Humdrum Viewer render
![02a-Rests-Durations.png-vhv](./kern-images/02a-Rests-Durations.png),

## 02b-Rests-PitchedRests.png
<p>Rests can have explicit pitches, where they are displayed. The first rest uses no explicit position and should use the default position, all others are explicitly positioned somewhere else. </p>

### Unofficial lilypond MusicXML render
![02b-Rests-PitchedRests.png-lilypond](./lilypond-musicxml/02b-Rests-PitchedRests.png)
### Verovio Humdrum Viewer render
![02b-Rests-PitchedRests.png-vhv](./kern-images/02b-Rests-PitchedRests.png),

## 02c-Rests-MultiMeasureRests.png
<p>Four multi-measure rests: 3 measures, 15 measures, 1 measure, and 12 measures. </p>

### Unofficial lilypond MusicXML render
![02c-Rests-MultiMeasureRests.png-lilypond](./lilypond-musicxml/02c-Rests-MultiMeasureRests.png)
### Verovio Humdrum Viewer render
![02c-Rests-MultiMeasureRests.png-vhv](./kern-images/02c-Rests-MultiMeasureRests.png),

## 02d-Rests-Multimeasure-TimeSignatures.png
<p>Multi-Measure rests should always be converted into durations that are a multiple of the time signature. </p>

### Unofficial lilypond MusicXML render
![02d-Rests-Multimeasure-TimeSignatures.png-lilypond](./lilypond-musicxml/02d-Rests-Multimeasure-TimeSignatures.png)
### Verovio Humdrum Viewer render
![02d-Rests-Multimeasure-TimeSignatures.png-vhv](./kern-images/02d-Rests-Multimeasure-TimeSignatures.png),

## 02e-Rests-NoType.png
<p>In some cases, a rest might not have its type attribute set (this happens, for example, with voices in Finale, where you don’t manually insert a rest). </p>

### Unofficial lilypond MusicXML render
![02e-Rests-NoType.png-lilypond](./lilypond-musicxml/02e-Rests-NoType.png)
### Verovio Humdrum Viewer render
![02e-Rests-NoType.png-vhv](./kern-images/02e-Rests-NoType.png),

## 03a-Rhythm-Durations.png
<p>All note durations, from long, brevis, whole until 128th; First with their plain values, then dotted and finally doubly-dotted. </p>

### Unofficial lilypond MusicXML render
![03a-Rhythm-Durations.png-lilypond](./lilypond-musicxml/03a-Rhythm-Durations.png)
### Verovio Humdrum Viewer render
![03a-Rhythm-Durations.png-vhv](./kern-images/03a-Rhythm-Durations.png),

## 03b-Rhythm-Backup.png
<p>Two voices with a backup, that does not jump to the beginning for the measure for voice 2, but somewhere in the middle. Voice 2 thus won’t have any notes or rests for the first beat of the measures. </p>

### Unofficial lilypond MusicXML render
![03b-Rhythm-Backup.png-lilypond](./lilypond-musicxml/03b-Rhythm-Backup.png)
### Verovio Humdrum Viewer render
![03b-Rhythm-Backup.png-vhv](./kern-images/03b-Rhythm-Backup.png),

## 03c-Rhythm-DivisionChange.png
<p>Although uncommon, the divisions of a quarter note can change somewhere in the middle of a MusicXML file. Here, the first half measure uses a division of 1, which then changes to 8 in the middle of the first measure and to 38 in the middle of the second measure. </p>

### Unofficial lilypond MusicXML render
![03c-Rhythm-DivisionChange.png-lilypond](./lilypond-musicxml/03c-Rhythm-DivisionChange.png)
### Verovio Humdrum Viewer render
![03c-Rhythm-DivisionChange.png-vhv](./kern-images/03c-Rhythm-DivisionChange.png),

## 03d-Rhythm-DottedDurations-Factors.png
<p>Several durations can be written with dots. For multimeasure rests, we can also have durations that cannot be expressed with dotted notes (like 5/8). </p>

### Unofficial lilypond MusicXML render
![03d-Rhythm-DottedDurations-Factors.png-lilypond](./lilypond-musicxml/03d-Rhythm-DottedDurations-Factors.png)
### Verovio Humdrum Viewer render
![03d-Rhythm-DottedDurations-Factors.png-vhv](./kern-images/03d-Rhythm-DottedDurations-Factors.png),

## 11a-TimeSignatures.png
<p>Various time signatures: 2/2 (alla breve), 4/4 (C), 2/2, 3/2, 2/4, 3/4, 4/4, 5/4, 3/8, 6/8, 12/8 </p>

### Unofficial lilypond MusicXML render
![11a-TimeSignatures.png-lilypond](./lilypond-musicxml/11a-TimeSignatures.png)
### Verovio Humdrum Viewer render
![11a-TimeSignatures.png-vhv](./kern-images/11a-TimeSignatures.png),

## 11b-TimeSignatures-NoTime.png
<p>A score without a time signature (but with a key and clefs) </p>

### Unofficial lilypond MusicXML render
![11b-TimeSignatures-NoTime.png-lilypond](./lilypond-musicxml/11b-TimeSignatures-NoTime.png)
### Verovio Humdrum Viewer render
![11b-TimeSignatures-NoTime.png-vhv](./kern-images/11b-TimeSignatures-NoTime.png),

## 11c-TimeSignatures-CompoundSimple.png
<p>Compound time signatures with same denominator: (3+2)/8 and (5+3+1)/4. </p>

### Unofficial lilypond MusicXML render
![11c-TimeSignatures-CompoundSimple.png-lilypond](./lilypond-musicxml/11c-TimeSignatures-CompoundSimple.png)
### Verovio Humdrum Viewer render
![11c-TimeSignatures-CompoundSimple.png-vhv](./kern-images/11c-TimeSignatures-CompoundSimple.png),

## 11d-TimeSignatures-CompoundMultiple.png
<p>Compound time signatures with separate fractions displayed: 3/8+2/8+3/4 and 5/2+1/8. </p>

### Unofficial lilypond MusicXML render
![11d-TimeSignatures-CompoundMultiple.png-lilypond](./lilypond-musicxml/11d-TimeSignatures-CompoundMultiple.png)
### Verovio Humdrum Viewer render
![11d-TimeSignatures-CompoundMultiple.png-vhv](./kern-images/11d-TimeSignatures-CompoundMultiple.png),

## 11e-TimeSignatures-CompoundMixed.png
<p>Compound time signatures of mixed type: (3+2)/8+3/4. </p>

### Unofficial lilypond MusicXML render
![11e-TimeSignatures-CompoundMixed.png-lilypond](./lilypond-musicxml/11e-TimeSignatures-CompoundMixed.png)
### Verovio Humdrum Viewer render
![11e-TimeSignatures-CompoundMixed.png-vhv](./kern-images/11e-TimeSignatures-CompoundMixed.png),

## 11f-TimeSignatures-SymbolMeaning.png
<p>A time signature of 3/8 with the symbol="cut" attribute and two symbol="single-number" attributes with compound time signatures. Shall the symbol be ignored in this case? </p>

### Unofficial lilypond MusicXML render
![11f-TimeSignatures-SymbolMeaning.png-lilypond](./lilypond-musicxml/11f-TimeSignatures-SymbolMeaning.png)
### Verovio Humdrum Viewer render
![11f-TimeSignatures-SymbolMeaning.png-vhv](./kern-images/11f-TimeSignatures-SymbolMeaning.png),

## 11g-TimeSignatures-SingleNumber.png
<p>Time signature displayed as a single number. </p>

### Unofficial lilypond MusicXML render
![11g-TimeSignatures-SingleNumber.png-lilypond](./lilypond-musicxml/11g-TimeSignatures-SingleNumber.png)
### Verovio Humdrum Viewer render
![11g-TimeSignatures-SingleNumber.png-vhv](./kern-images/11g-TimeSignatures-SingleNumber.png),

## 11h-TimeSignatures-SenzaMisura.png
<p>Senza-misura time signature </p>

### Unofficial lilypond MusicXML render
![11h-TimeSignatures-SenzaMisura.png-lilypond](./lilypond-musicxml/11h-TimeSignatures-SenzaMisura.png)
### Verovio Humdrum Viewer render
![11h-TimeSignatures-SenzaMisura.png-vhv](./kern-images/11h-TimeSignatures-SenzaMisura.png),

## 12a-Clefs.png
<p>Various clefs: G, C, F, percussion, TAB and none; some are also possible with transposition and on other staff lines than their default (e.g. soprano/alto/tenor/baritone C clefs); Each measure shows a different clef (measure 17 has the "none" clef), only measure 18 has the same treble clef as measure 1. </p>

### Unofficial lilypond MusicXML render
![12a-Clefs.png-lilypond](./lilypond-musicxml/12a-Clefs.png)
### Verovio Humdrum Viewer render
![12a-Clefs.png-vhv](./kern-images/12a-Clefs.png),

## 12b-Clefs-NoKeyOrClef.png
<p>A score without any key or clef defined. The default (4/4 in treble clef) should be used. </p>

### Unofficial lilypond MusicXML render
![12b-Clefs-NoKeyOrClef.png-lilypond](./lilypond-musicxml/12b-Clefs-NoKeyOrClef.png)
### Verovio Humdrum Viewer render
![12b-Clefs-NoKeyOrClef.png-vhv](./kern-images/12b-Clefs-NoKeyOrClef.png),

## 13a-KeySignatures.png
<p>Various key signature: from 11 flats to 11 sharps (each one first one measure in major, then one measure in minor) </p>

### Unofficial lilypond MusicXML render
![13a-KeySignatures.png-lilypond](./lilypond-musicxml/13a-KeySignatures.png)
### Verovio Humdrum Viewer render
![13a-KeySignatures.png-vhv](./kern-images/13a-KeySignatures.png),

## 13b-KeySignatures-ChurchModes.png
<p>All different modes: major, minor, ionian, dorian, phrygian, lydian, mixolydian, aeolian, and locrian; All modes are given with 2 sharps. </p>

### Unofficial lilypond MusicXML render
![13b-KeySignatures-ChurchModes.png-lilypond](./lilypond-musicxml/13b-KeySignatures-ChurchModes.png)
### Verovio Humdrum Viewer render
![13b-KeySignatures-ChurchModes.png-vhv](./kern-images/13b-KeySignatures-ChurchModes.png),

## 13c-KeySignatures-NonTraditional.png
<p>Non-traditional key signatures, where each alteration is separately given. Here we have (f sharp, a flat, b flat) and (c flatflat, g sharp sharp, d flat, b sharp, f natural), where in the second case an explicit octave is given for each alteration. </p>

### Unofficial lilypond MusicXML render
![13c-KeySignatures-NonTraditional.png-lilypond](./lilypond-musicxml/13c-KeySignatures-NonTraditional.png)
### Verovio Humdrum Viewer render
![13c-KeySignatures-NonTraditional.png-vhv](./kern-images/13c-KeySignatures-NonTraditional.png),

## 13d-KeySignatures-Microtones.png
<p>Non-traditional key signatures with microtone alterations: (g flat-and-a-half, a flat, b half-flat, c natural, d half-sharp, e sharp, f sharp-and-a-half). </p>

### Unofficial lilypond MusicXML render
![13d-KeySignatures-Microtones.png-lilypond](./lilypond-musicxml/13d-KeySignatures-Microtones.png)
### Verovio Humdrum Viewer render
![13d-KeySignatures-Microtones.png-vhv](./kern-images/13d-KeySignatures-Microtones.png),

## 14a-StaffDetails-LineChanges.png
<p>The number of staff lines can be modified by using the staff-lines child of the staff-details attribute. This can happen globally (the first staff has one line globally) or during the part at the beginning of a measure and even inside a measure (the second part has 5 lines initially, 4 at the beginning of the second measure, and 3 starting in the middle of the third measure). </p>

### Unofficial lilypond MusicXML render
![14a-StaffDetails-LineChanges.png-lilypond](./lilypond-musicxml/14a-StaffDetails-LineChanges.png)
### Verovio Humdrum Viewer render
![14a-StaffDetails-LineChanges.png-vhv](./kern-images/14a-StaffDetails-LineChanges.png),

## 21a-Chord-Basic.png
<p>One simple chord consisting of two notes. </p>

### Unofficial lilypond MusicXML render
![21a-Chord-Basic.png-lilypond](./lilypond-musicxml/21a-Chord-Basic.png)
### Verovio Humdrum Viewer render
![21a-Chord-Basic.png-vhv](./kern-images/21a-Chord-Basic.png),

## 21b-Chords-TwoNotes.png
<p>Some subsequent (identical) two-note chords. </p>

### Unofficial lilypond MusicXML render
![21b-Chords-TwoNotes.png-lilypond](./lilypond-musicxml/21b-Chords-TwoNotes.png)
### Verovio Humdrum Viewer render
![21b-Chords-TwoNotes.png-vhv](./kern-images/21b-Chords-TwoNotes.png),

## 21c-Chords-ThreeNotesDuration.png
<p>Some three-note chords, with various durations. </p>

### Unofficial lilypond MusicXML render
![21c-Chords-ThreeNotesDuration.png-lilypond](./lilypond-musicxml/21c-Chords-ThreeNotesDuration.png)
### Verovio Humdrum Viewer render
![21c-Chords-ThreeNotesDuration.png-vhv](./kern-images/21c-Chords-ThreeNotesDuration.png),

## 21d-Chords-SchubertStabatMater.png
<p>Chords in the second measure, after several ornaments in the first measure and a p at the beginning of the second measure. </p>

### Unofficial lilypond MusicXML render
![21d-Chords-SchubertStabatMater.png-lilypond](./lilypond-musicxml/21d-Chords-SchubertStabatMater.png)
### Verovio Humdrum Viewer render
![21d-Chords-SchubertStabatMater.png-vhv](./kern-images/21d-Chords-SchubertStabatMater.png),

## 21e-Chords-PickupMeasures.png
<p>Check for proper chord detection after a pickup measure (i.e. the first beat of the measure is not aligned with multiples of the time signature)! </p>

### Unofficial lilypond MusicXML render
![21e-Chords-PickupMeasures.png-lilypond](./lilypond-musicxml/21e-Chords-PickupMeasures.png)
### Verovio Humdrum Viewer render
![21e-Chords-PickupMeasures.png-vhv](./kern-images/21e-Chords-PickupMeasures.png),

## 21f-Chord-ElementInBetween.png
<p>Between the individual notes of a chord there can be direction or harmony elements, which should be properly assigned to the chord (or the position of the chord). </p>

### Unofficial lilypond MusicXML render
![21f-Chord-ElementInBetween.png-lilypond](./lilypond-musicxml/21f-Chord-ElementInBetween.png)
### Verovio Humdrum Viewer render
![21f-Chord-ElementInBetween.png-vhv](./kern-images/21f-Chord-ElementInBetween.png),

## 22a-Noteheads.png
<p>Different note styles, using the <notehead> element. First, each note head style is printed with four quarter notes, two with filled heads, two with unfilled heads, where first the stem is up and then the stem is down. After that, each note head style is printed with a half note (should have an unfilled head by default). Finally, the Aiken note head styles are tested, once with stem up and once with stem down. </p>

### Unofficial lilypond MusicXML render
![22a-Noteheads.png-lilypond](./lilypond-musicxml/22a-Noteheads.png)
### Verovio Humdrum Viewer render
![22a-Noteheads.png-vhv](./kern-images/22a-Noteheads.png),

## 22b-Staff-Notestyles.png
<p>Staff-connected note styles: slash notation, hidden notes (with and without hidden staff lines) </p>

### Unofficial lilypond MusicXML render
![22b-Staff-Notestyles.png-lilypond](./lilypond-musicxml/22b-Staff-Notestyles.png)
### Verovio Humdrum Viewer render
![22b-Staff-Notestyles.png-vhv](./kern-images/22b-Staff-Notestyles.png),

## 22c-Noteheads-Chords.png
<p>Different note styles for individual notes inside a chord, using the <notehead> element. </p>

### Unofficial lilypond MusicXML render
![22c-Noteheads-Chords.png-lilypond](./lilypond-musicxml/22c-Noteheads-Chords.png)
### Verovio Humdrum Viewer render
![22c-Noteheads-Chords.png-vhv](./kern-images/22c-Noteheads-Chords.png),

## 22d-Parenthesized-Noteheads.png
<p>Parenthesized note heads. First, a single parenthesized note is tested, once with a normal and then with a non-standard notehead, then two chords with some/all parenthesized noteheads and finally a parenthesized rest. </p>

### Unofficial lilypond MusicXML render
![22d-Parenthesized-Noteheads.png-lilypond](./lilypond-musicxml/22d-Parenthesized-Noteheads.png)
### Verovio Humdrum Viewer render
![22d-Parenthesized-Noteheads.png-vhv](./kern-images/22d-Parenthesized-Noteheads.png),

## 23a-Tuplets.png
<p>Some tuplets (3:2, 3:2, 3:2, 4:2, 4:1, 7:3, 6:2) with the default tuplet bracket displaying the number of actual notes played. The second tuplet does not have a number attribute set. </p>

### Unofficial lilypond MusicXML render
![23a-Tuplets.png-lilypond](./lilypond-musicxml/23a-Tuplets.png)
### Verovio Humdrum Viewer render
![23a-Tuplets.png-vhv](./kern-images/23a-Tuplets.png),

## 23b-Tuplets-Styles.png
<p>Different tuplet styles: default, none, x:y, x:y-note; Each with bracket, slur and none. Finally, non-standard 4:3 and 17:2 tuplets are given. </p>

### Unofficial lilypond MusicXML render
![23b-Tuplets-Styles.png-lilypond](./lilypond-musicxml/23b-Tuplets-Styles.png)
### Verovio Humdrum Viewer render
![23b-Tuplets-Styles.png-vhv](./kern-images/23b-Tuplets-Styles.png),

## 23c-Tuplet-Display-NonStandard.png
<p>Displaying tuplet note types, that might not coincide with the displayed note. The first two tuplets take the type from the note, the second two from the <time-modification> element, the remaining pair of tuplets from the <tuplet> notation element. The tuplets in measure 3 specify both a number of notes and a type inside the <tuplet-actual> and <tuplet-normal> elements, the ones in measure 4 specify only a note type (but no number), and the ones in measure 5 specify only a number of tuplet-notes (but no type, which is deduced from the note’s type). The first tuplet of measures 3-5 uses ’display-type="actual"’, the second one ’display-type="both"’. FIXME: The tuplet-normal should coincide with the real notes! </p>

### Unofficial lilypond MusicXML render
![23c-Tuplet-Display-NonStandard.png-lilypond](./lilypond-musicxml/23c-Tuplet-Display-NonStandard.png)
### Verovio Humdrum Viewer render
![23c-Tuplet-Display-NonStandard.png-vhv](./kern-images/23c-Tuplet-Display-NonStandard.png),

## 23d-Tuplets-Nested.png
<p>Tuplets can be nested. Here there is a 5:2 tuplet inside a 3:2 tuple (all consisting of written eighth notes). </p>

### Unofficial lilypond MusicXML render
![23d-Tuplets-Nested.png-lilypond](./lilypond-musicxml/23d-Tuplets-Nested.png)
### Verovio Humdrum Viewer render
![23d-Tuplets-Nested.png-vhv](./kern-images/23d-Tuplets-Nested.png),

## 23e-Tuplets-Tremolo.png
<p>Tremolo tuplets are tuplets on single notes with a tremolo ornament. The application shall correctly import these notes with 2/3 or their time... </p>

### Unofficial lilypond MusicXML render
![23e-Tuplets-Tremolo.png-lilypond](./lilypond-musicxml/23e-Tuplets-Tremolo.png)
### Verovio Humdrum Viewer render
![23e-Tuplets-Tremolo.png-vhv](./kern-images/23e-Tuplets-Tremolo.png),

## 23f-Tuplets-DurationButNoBracket.png
<p>Some "triplets" on the end of the first and in the second staff, using only <time-modification>, but not explicit tuplet bracket. Thus, the duration of the notes in the second staff should be scaled properly in comparison to staff 1, but no visual indication about the tuplets is given. </p>

### Unofficial lilypond MusicXML render
![23f-Tuplets-DurationButNoBracket.png-lilypond](./lilypond-musicxml/23f-Tuplets-DurationButNoBracket.png)
### Verovio Humdrum Viewer render
![23f-Tuplets-DurationButNoBracket.png-vhv](./kern-images/23f-Tuplets-DurationButNoBracket.png),

## 24a-GraceNotes.png
<p>Different kinds of grace notes: acciaccatura, appoggiatura; beamed grace notes; grace notes with accidentals; different durations of the grace notes. </p>

### Unofficial lilypond MusicXML render
![24a-GraceNotes.png-lilypond](./lilypond-musicxml/24a-GraceNotes.png)
### Verovio Humdrum Viewer render
![24a-GraceNotes.png-vhv](./kern-images/24a-GraceNotes.png),

## 24b-ChordAsGraceNote.png
<p>Chords as grace notes. </p>

### Unofficial lilypond MusicXML render
![24b-ChordAsGraceNote.png-lilypond](./lilypond-musicxml/24b-ChordAsGraceNote.png)
### Verovio Humdrum Viewer render
![24b-ChordAsGraceNote.png-vhv](./kern-images/24b-ChordAsGraceNote.png),

## 24c-GraceNote-MeasureEnd.png
<p>A grace note that appears at the measure end (without any steal-from-* attribute set). Some applications need to convert this into an after-grace. </p>

### Unofficial lilypond MusicXML render
![24c-GraceNote-MeasureEnd.png-lilypond](./lilypond-musicxml/24c-GraceNote-MeasureEnd.png)
### Verovio Humdrum Viewer render
![24c-GraceNote-MeasureEnd.png-vhv](./kern-images/24c-GraceNote-MeasureEnd.png),

## 24d-AfterGrace.png
<p>Some grace notes and after-graces (indicated by steal-time-previous and steal-time-following). </p>

### Unofficial lilypond MusicXML render
![24d-AfterGrace.png-lilypond](./lilypond-musicxml/24d-AfterGrace.png)
### Verovio Humdrum Viewer render
![24d-AfterGrace.png-vhv](./kern-images/24d-AfterGrace.png),

## 24e-GraceNote-StaffChange.png
<p>A grace note on a different staff than the actual note. </p>

### Unofficial lilypond MusicXML render
![24e-GraceNote-StaffChange.png-lilypond](./lilypond-musicxml/24e-GraceNote-StaffChange.png)
### Verovio Humdrum Viewer render
![**VHV could not render: 24e-GraceNote-StaffChange.png**](./error.svg),

## 24f-GraceNote-Slur.png
<p>A grace note with a slur to the actual note. This can be interpreted as acciaccatura or appoggiatura, depending on the existence of a slash. </p>

### Unofficial lilypond MusicXML render
![24f-GraceNote-Slur.png-lilypond](./lilypond-musicxml/24f-GraceNote-Slur.png)
### Verovio Humdrum Viewer render
![24f-GraceNote-Slur.png-vhv](./kern-images/24f-GraceNote-Slur.png),

## 31a-Directions.png
<p>All <direction> elements defined in MusicXML. The lyrics for each note describes the direction element assigned to that note. </p>

### Unofficial lilypond MusicXML render
![31a-Directions.png-lilypond](./lilypond-musicxml/31a-Directions.png)
### Verovio Humdrum Viewer render
![**VHV could not render: 31a-Directions.png**](./error.svg),

## 31c-MetronomeMarks.png
<p>Tempo Markings: note=bpm, text (note=bpm), note=note, (note=note), (note=bpm) </p>

### Unofficial lilypond MusicXML render
![31c-MetronomeMarks.png-lilypond](./lilypond-musicxml/31c-MetronomeMarks.png)
### Verovio Humdrum Viewer render
![31c-MetronomeMarks.png-vhv](./kern-images/31c-MetronomeMarks.png),

## 32a-Notations.png
<p>All <notation> elements defined in MusicXML. The lyrics show the notation assigned to each note. </p>

### Unofficial lilypond MusicXML render
![32a-Notations.png-lilypond](./lilypond-musicxml/32a-Notations.png)
### Verovio Humdrum Viewer render
![32a-Notations.png-vhv](./kern-images/32a-Notations.png),

## 32b-Articulations-Texts.png
<p>Text markup: different font sizes, weights and colors. </p>

### Unofficial lilypond MusicXML render
![32b-Articulations-Texts.png-lilypond](./lilypond-musicxml/32b-Articulations-Texts.png)
### Verovio Humdrum Viewer render
![**VHV could not render: 32b-Articulations-Texts.png**](./error.svg),

## 32c-MultipleNotationChildren.png
<p>It should not make any difference whether two articulations are given inside two different notation elements, inside two different articulations children of the same notation element or inside the same articulations element. Thus, all three notes should have a staccato and an accent. </p>

### Unofficial lilypond MusicXML render
![32c-MultipleNotationChildren.png-lilypond](./lilypond-musicxml/32c-MultipleNotationChildren.png)
### Verovio Humdrum Viewer render
![32c-MultipleNotationChildren.png-vhv](./kern-images/32c-MultipleNotationChildren.png),

## 32d-Arpeggio.png
<p>Different Arpeggio directions (normal, up, down, non-arpeggiate) </p>

### Unofficial lilypond MusicXML render
![32d-Arpeggio.png-lilypond](./lilypond-musicxml/32d-Arpeggio.png)
### Verovio Humdrum Viewer render
![32d-Arpeggio.png-vhv](./kern-images/32d-Arpeggio.png),

## 33a-Spanners.png
<p>Several spanners defined in MusicXML: tuplet, slur (solid, dashed), tie,  wedge (cresc, dim), tr + wavy-line, single-note trill spanner, octave-shift (8va,15mb), bracket (solid down/down, dashed down/down, solid none/down, dashed none/up, solid none/none), dashes, glissando (wavy), bend-alter, slide (solid), grouping, two-note tremolo, hammer-on, pull-off, pedal (down, change, up). </p>

### Unofficial lilypond MusicXML render
![33a-Spanners.png-lilypond](./lilypond-musicxml/33a-Spanners.png)
### Verovio Humdrum Viewer render
![33a-Spanners.png-vhv](./kern-images/33a-Spanners.png),

## 33b-Spanners-Tie.png
<p>Two simple tied whole notes </p>

### Unofficial lilypond MusicXML render
![33b-Spanners-Tie.png-lilypond](./lilypond-musicxml/33b-Spanners-Tie.png)
### Verovio Humdrum Viewer render
![33b-Spanners-Tie.png-vhv](./kern-images/33b-Spanners-Tie.png),

## 33c-Spanners-Slurs.png
<p>A note can be the end of one slur and the start of a new slur. Also, in MusicXML, nested slurs are possible like in the second measure where one slur goes over all four notes, and another slur goes from the second to the third note. </p>

### Unofficial lilypond MusicXML render
![33c-Spanners-Slurs.png-lilypond](./lilypond-musicxml/33c-Spanners-Slurs.png)
### Verovio Humdrum Viewer render
![33c-Spanners-Slurs.png-vhv](./kern-images/33c-Spanners-Slurs.png),

## 33d-Spanners-OctaveShifts.png
<p>All types of octave shifts (15ma, 15mb, 8va, 8vb) </p>

### Unofficial lilypond MusicXML render
![33d-Spanners-OctaveShifts.png-lilypond](./lilypond-musicxml/33d-Spanners-OctaveShifts.png)
### Verovio Humdrum Viewer render
![33d-Spanners-OctaveShifts.png-vhv](./kern-images/33d-Spanners-OctaveShifts.png),

## 33e-Spanners-OctaveShifts-InvalidSize.png
<p>Invalid octave-shifts: 27 down, 11 up. </p>

### Unofficial lilypond MusicXML render
![33e-Spanners-OctaveShifts-InvalidSize.png-lilypond](./lilypond-musicxml/33e-Spanners-OctaveShifts-InvalidSize.png)
### Verovio Humdrum Viewer render
![**VHV could not render: 33e-Spanners-OctaveShifts-InvalidSize.png**](./error.svg),

## 33f-Trill-EndingOnGraceNote.png
<p>A trill spanner that spans a grace note and ends on an after-grace note at the end of the measure. </p>

### Unofficial lilypond MusicXML render
![33f-Trill-EndingOnGraceNote.png-lilypond](./lilypond-musicxml/33f-Trill-EndingOnGraceNote.png)
### Verovio Humdrum Viewer render
![33f-Trill-EndingOnGraceNote.png-vhv](./kern-images/33f-Trill-EndingOnGraceNote.png),

## 33g-Slur-ChordedNotes.png
<p>Slurs on chorded notes: Only the first note of the chord should get the slur notation. Some applications print out the slur for all notes – these should be ignored. </p>

### Unofficial lilypond MusicXML render
![33g-Slur-ChordedNotes.png-lilypond](./lilypond-musicxml/33g-Slur-ChordedNotes.png)
### Verovio Humdrum Viewer render
![33g-Slur-ChordedNotes.png-vhv](./kern-images/33g-Slur-ChordedNotes.png),

## 33h-Spanners-Glissando.png
<p>All different types of glissando defined in MusicXML </p>

### Unofficial lilypond MusicXML render
![33h-Spanners-Glissando.png-lilypond](./lilypond-musicxml/33h-Spanners-Glissando.png)
### Verovio Humdrum Viewer render
![33h-Spanners-Glissando.png-vhv](./kern-images/33h-Spanners-Glissando.png),

## 33i-Ties-NotEnded.png
<p>Several ties that have their end tag missing. </p>

### Unofficial lilypond MusicXML render
![33i-Ties-NotEnded.png-lilypond](./lilypond-musicxml/33i-Ties-NotEnded.png)
### Verovio Humdrum Viewer render
![33i-Ties-NotEnded.png-vhv](./kern-images/33i-Ties-NotEnded.png),

## 41a-MultiParts-Partorder.png
<p>A piece with four parts (P0, P1, P2, P3; different from what Finale creates!). Are they converted in the correct order? </p>

### Unofficial lilypond MusicXML render
![41a-MultiParts-Partorder.png-lilypond](./lilypond-musicxml/41a-MultiParts-Partorder.png)
### Verovio Humdrum Viewer render
![41a-MultiParts-Partorder.png-vhv](./kern-images/41a-MultiParts-Partorder.png),

## 41b-MultiParts-MoreThan10.png
<p>A piece with 20 parts to check whether an application supports that many parts and whether they are correctly sorted. </p>

### Unofficial lilypond MusicXML render
![41b-MultiParts-MoreThan10.png-lilypond](./lilypond-musicxml/41b-MultiParts-MoreThan10.png)
### Verovio Humdrum Viewer render
![41b-MultiParts-MoreThan10.png-vhv](./kern-images/41b-MultiParts-MoreThan10.png),

## 41c-StaffGroups.png
<p>A huge orchestra score with 28 parts and different kinds of nested bracketed groups. Each part/group is assigned a name and an abbreviation to be shown before the staff. Also, most of the groups show unbroken barlines, while the barlines are broken between the groups. </p>

### Unofficial lilypond MusicXML render
![41c-StaffGroups.png-lilypond](./lilypond-musicxml/41c-StaffGroups.png)
### Verovio Humdrum Viewer render
![41c-StaffGroups.png-vhv](./kern-images/41c-StaffGroups.png),

## 41d-StaffGroups-Nested.png
<p>Two properly nested part groups: One group  (with a square bracket) goes from staff 2 to 4) and another group (with a curly bracket) goes from staff 3 to 4. </p>

### Unofficial lilypond MusicXML render
![41d-StaffGroups-Nested.png-lilypond](./lilypond-musicxml/41d-StaffGroups-Nested.png)
### Verovio Humdrum Viewer render
![41d-StaffGroups-Nested.png-vhv](./kern-images/41d-StaffGroups-Nested.png),

## 41e-StaffGroups-InstrumentNames-Linebroken.png
<p>Part names and abbreviations can contain line breaks. </p>

### Unofficial lilypond MusicXML render
![41e-StaffGroups-InstrumentNames-Linebroken.png-lilypond](./lilypond-musicxml/41e-StaffGroups-InstrumentNames-Linebroken.png)
### Verovio Humdrum Viewer render
![41e-StaffGroups-InstrumentNames-Linebroken.png-vhv](./kern-images/41e-StaffGroups-InstrumentNames-Linebroken.png),

## 41f-StaffGroups-Overlapping.png
<p>MusicXML allows for overlapping part-groups, while many applications do not allow overlapping groups, but require them to be properly nested. In this case, one group (with a square bracket) goes from staff 2 to 4) and another group (with a curly bracket) goes from staff 3 to 5. </p>

### Unofficial lilypond MusicXML render
![41f-StaffGroups-Overlapping.png-lilypond](./lilypond-musicxml/41f-StaffGroups-Overlapping.png)
### Verovio Humdrum Viewer render
![41f-StaffGroups-Overlapping.png-vhv](./kern-images/41f-StaffGroups-Overlapping.png),

## 41g-PartNoId.png
<p>A part with no id attribute. Since this piece has only one part, it is clear which part is described by the one part element. </p>

### Unofficial lilypond MusicXML render
![41g-PartNoId.png-lilypond](./lilypond-musicxml/41g-PartNoId.png)
### Verovio Humdrum Viewer render
![**VHV could not render: 41g-PartNoId.png**](./error.svg),

## 41h-TooManyParts.png
<p>This piece has more part elements than the part-list section gives. One can either convert all the parts present, but not listed in the part-list, or simply not import / ignore them. </p>

### Unofficial lilypond MusicXML render
![41h-TooManyParts.png-lilypond](./lilypond-musicxml/41h-TooManyParts.png)
### Verovio Humdrum Viewer render
![**VHV could not render: 41h-TooManyParts.png**](./error.svg),

## 41i-PartNameDisplay-Override.png
<p>The first staff uses only part-name, while the second one (same part-name) overrides it with a custom text. Similar for the part-abbreviation used in subsequent staves. </p>

### Unofficial lilypond MusicXML render
![41i-PartNameDisplay-Override.png-lilypond](./lilypond-musicxml/41i-PartNameDisplay-Override.png)
### Verovio Humdrum Viewer render
![**VHV could not render: 41i-PartNameDisplay-Override.png**](./error.svg),

## 42a-MultiVoice-TwoVoicesOnStaff-Lyrics.png
<p>Two voices share one staff. Each voice is assigned some lyrics. </p>

### Unofficial lilypond MusicXML render
![42a-MultiVoice-TwoVoicesOnStaff-Lyrics.png-lilypond](./lilypond-musicxml/42a-MultiVoice-TwoVoicesOnStaff-Lyrics.png)
### Verovio Humdrum Viewer render
![42a-MultiVoice-TwoVoicesOnStaff-Lyrics.png-vhv](./kern-images/42a-MultiVoice-TwoVoicesOnStaff-Lyrics.png),

## 42b-MultiVoice-MidMeasureClefChange.png
<p>A multi-voice / multi-staff part with a clef change in the middle of a measure and a <backward> for voice 2 jumping back beyond that clef change. </p>

### Unofficial lilypond MusicXML render
![42b-MultiVoice-MidMeasureClefChange.png-lilypond](./lilypond-musicxml/42b-MultiVoice-MidMeasureClefChange.png)
### Verovio Humdrum Viewer render
![42b-MultiVoice-MidMeasureClefChange.png-vhv](./kern-images/42b-MultiVoice-MidMeasureClefChange.png),

## 43a-PianoStaff.png
<p>A simple piano staff </p>

### Unofficial lilypond MusicXML render
![43a-PianoStaff.png-lilypond](./lilypond-musicxml/43a-PianoStaff.png)
### Verovio Humdrum Viewer render
![43a-PianoStaff.png-vhv](./kern-images/43a-PianoStaff.png),

## 43b-MultiStaff-DifferentKeys.png
<p>A piano staff with different keys and clefs for each of its staves. The keys and clefs for both staves are given at the very beginning of the measure. </p>

### Unofficial lilypond MusicXML render
![43b-MultiStaff-DifferentKeys.png-lilypond](./lilypond-musicxml/43b-MultiStaff-DifferentKeys.png)
### Verovio Humdrum Viewer render
![43b-MultiStaff-DifferentKeys.png-vhv](./kern-images/43b-MultiStaff-DifferentKeys.png),

## 43c-MultiStaff-DifferentKeysAfterBackup.png
<p>A piano staff with different keys and clefs for each of its staves. The key and clef for the second staff is given only after a backward, just before the first note of the second staff is given, but after the whole measure for staff 1 has been given. </p>

### Unofficial lilypond MusicXML render
![43c-MultiStaff-DifferentKeysAfterBackup.png-lilypond](./lilypond-musicxml/43c-MultiStaff-DifferentKeysAfterBackup.png)
### Verovio Humdrum Viewer render
![43c-MultiStaff-DifferentKeysAfterBackup.png-vhv](./kern-images/43c-MultiStaff-DifferentKeysAfterBackup.png),

## 43d-MultiStaff-StaffChange.png
<p>Staff changes in a piano staff. The voice from the second staff has some notes/chords on the first staff. The final two chords have some notes on the first, some on the second staff. </p>

### Unofficial lilypond MusicXML render
![43d-MultiStaff-StaffChange.png-lilypond](./lilypond-musicxml/43d-MultiStaff-StaffChange.png)
### Verovio Humdrum Viewer render
![43d-MultiStaff-StaffChange.png-vhv](./kern-images/43d-MultiStaff-StaffChange.png),

## 43e-Multistaff-ClefDynamics.png
<p>A piano staff with dynamics and clef changes, where each element (ffff, wedge and clef changes) applies only to one voice or one staff, respectively. </p>

### Unofficial lilypond MusicXML render
![43e-Multistaff-ClefDynamics.png-lilypond](./lilypond-musicxml/43e-Multistaff-ClefDynamics.png)
### Verovio Humdrum Viewer render
![**VHV could not render: 43e-Multistaff-ClefDynamics.png**](./error.svg),

## 45a-SimpleRepeat.png
<p>A simple, repeated measure (repeated 5 times) </p>

### Unofficial lilypond MusicXML render
![45a-SimpleRepeat.png-lilypond](./lilypond-musicxml/45a-SimpleRepeat.png)
### Verovio Humdrum Viewer render
![45a-SimpleRepeat.png-vhv](./kern-images/45a-SimpleRepeat.png),

## 45b-RepeatWithAlternatives.png
<p>A simple repeat with two alternative endings (volta brackets). </p>

### Unofficial lilypond MusicXML render
![45b-RepeatWithAlternatives.png-lilypond](./lilypond-musicxml/45b-RepeatWithAlternatives.png)
### Verovio Humdrum Viewer render
![45b-RepeatWithAlternatives.png-vhv](./kern-images/45b-RepeatWithAlternatives.png),

## 45c-RepeatMultipleTimes.png
<p>Repeats can also be nested. </p>

### Unofficial lilypond MusicXML render
![45c-RepeatMultipleTimes.png-lilypond](./lilypond-musicxml/45c-RepeatMultipleTimes.png)
### Verovio Humdrum Viewer render
![45c-RepeatMultipleTimes.png-vhv](./kern-images/45c-RepeatMultipleTimes.png),

## 45d-Repeats-Nested-Alternatives.png
<p>Nested repeats, each with alternative endings. </p>

### Unofficial lilypond MusicXML render
![45d-Repeats-Nested-Alternatives.png-lilypond](./lilypond-musicxml/45d-Repeats-Nested-Alternatives.png)
### Verovio Humdrum Viewer render
![45d-Repeats-Nested-Alternatives.png-vhv](./kern-images/45d-Repeats-Nested-Alternatives.png),

## 45e-Repeats-Nested-Alternatives.png
<p>Some more nested repeats with alternatives. The barline between measure 7 and 8 will probably be messed up! (Should be a repeat on both sides!) </p>

### Unofficial lilypond MusicXML render
![45e-Repeats-Nested-Alternatives.png-lilypond](./lilypond-musicxml/45e-Repeats-Nested-Alternatives.png)
### Verovio Humdrum Viewer render
![45e-Repeats-Nested-Alternatives.png-vhv](./kern-images/45e-Repeats-Nested-Alternatives.png),

## 45f-Repeats-InvalidEndings.png
<p>Some more nested repeats with alternatives, where the MusicXML file does not make sense in the first place. How well are applications able to cope with improper repeats and alternatives? </p>

### Unofficial lilypond MusicXML render
![45f-Repeats-InvalidEndings.png-lilypond](./lilypond-musicxml/45f-Repeats-InvalidEndings.png)
### Verovio Humdrum Viewer render
![45f-Repeats-InvalidEndings.png-vhv](./kern-images/45f-Repeats-InvalidEndings.png),

## 45g-Repeats-NotEnded.png
<p>A forward-repeating bar line without an ending repeat bar. </p>

### Unofficial lilypond MusicXML render
![45g-Repeats-NotEnded.png-lilypond](./lilypond-musicxml/45g-Repeats-NotEnded.png)
### Verovio Humdrum Viewer render
![45g-Repeats-NotEnded.png-vhv](./kern-images/45g-Repeats-NotEnded.png),

## 46a-Barlines.png
<p>Different types of (non-repeat) barlines: default (no setting), regular, dotted, dashed, heavy, light-light, light-heavy, heavy-light, heavy-heavy, tick, short, none. </p>

### Unofficial lilypond MusicXML render
![46a-Barlines.png-lilypond](./lilypond-musicxml/46a-Barlines.png)
### Verovio Humdrum Viewer render
![46a-Barlines.png-vhv](./kern-images/46a-Barlines.png),

## 46b-MidmeasureBarline.png
<p>Barlines can appear at mid-measure positions, without using an implicit measure! </p>

### Unofficial lilypond MusicXML render
![46b-MidmeasureBarline.png-lilypond](./lilypond-musicxml/46b-MidmeasureBarline.png)
### Verovio Humdrum Viewer render
![46b-MidmeasureBarline.png-vhv](./kern-images/46b-MidmeasureBarline.png),

## 46c-Midmeasure-Clef.png
<p>A clef change in the middle of a measure, using either an implicit measure or simply placing the attributes in the middle of the measure. </p>

### Unofficial lilypond MusicXML render
![46c-Midmeasure-Clef.png-lilypond](./lilypond-musicxml/46c-Midmeasure-Clef.png)
### Verovio Humdrum Viewer render
![46c-Midmeasure-Clef.png-vhv](./kern-images/46c-Midmeasure-Clef.png),

## 46d-PickupMeasure-ImplicitMeasures.png
<p>A 3/8 pickup measure, a measure that is split into one (incomplete, only 2/4) measure and an implicit measure, and an incomplete measure (containg 3/4). </p>

### Unofficial lilypond MusicXML render
![46d-PickupMeasure-ImplicitMeasures.png-lilypond](./lilypond-musicxml/46d-PickupMeasure-ImplicitMeasures.png)
### Verovio Humdrum Viewer render
![46d-PickupMeasure-ImplicitMeasures.png-vhv](./kern-images/46d-PickupMeasure-ImplicitMeasures.png),

## 46e-PickupMeasure-SecondVoiceStartsLater.png
<p>Voice 2 should start at 2nd beat of first full measure. </p>

### Unofficial lilypond MusicXML render
![46e-PickupMeasure-SecondVoiceStartsLater.png-lilypond](./lilypond-musicxml/46e-PickupMeasure-SecondVoiceStartsLater.png)
### Verovio Humdrum Viewer render
![46e-PickupMeasure-SecondVoiceStartsLater.png-vhv](./kern-images/46e-PickupMeasure-SecondVoiceStartsLater.png),

## 46f-IncompleteMeasures.png
<p>Measures can contain less notes than the time signature says. Here, the first and third measures contain only two quarters instead of four. </p>

### Unofficial lilypond MusicXML render
![46f-IncompleteMeasures.png-lilypond](./lilypond-musicxml/46f-IncompleteMeasures.png)
### Verovio Humdrum Viewer render
![46f-IncompleteMeasures.png-vhv](./kern-images/46f-IncompleteMeasures.png),

## 46g-PickupMeasure-Chordnames-FiguredBass.png
<p>Pickup measure with chord names and figured bass. </p>

### Unofficial lilypond MusicXML render
![46g-PickupMeasure-Chordnames-FiguredBass.png-lilypond](./lilypond-musicxml/46g-PickupMeasure-Chordnames-FiguredBass.png)
### Verovio Humdrum Viewer render
![46g-PickupMeasure-Chordnames-FiguredBass.png-vhv](./kern-images/46g-PickupMeasure-Chordnames-FiguredBass.png),

## 51b-Header-Quotes.png
<p>Several header fields and part names can contain quotes ("). This test checks whether they are converted/imported without problems (i.e. whether they are correctly escaped when converting). </p>

### Unofficial lilypond MusicXML render
![51b-Header-Quotes.png-lilypond](./lilypond-musicxml/51b-Header-Quotes.png)
### Verovio Humdrum Viewer render
![**VHV could not render: 51b-Header-Quotes.png**](./error.svg),

## 51c-MultipleRights.png
<p>There can be multiple <rights> tags in the identification element of the score. The conversion shall still work, ideally using both of them. </p>

### Unofficial lilypond MusicXML render
![51c-MultipleRights.png-lilypond](./lilypond-musicxml/51c-MultipleRights.png)
### Verovio Humdrum Viewer render
![**VHV could not render: 51c-MultipleRights.png**](./error.svg),

## 51d-EmptyTitle.png
<p>A piece with an empty (but existing) work-title, but a non-empty movement-title. In this case the movement-title should be chosen, even though the work-title exists. </p>

### Unofficial lilypond MusicXML render
![51d-EmptyTitle.png-lilypond](./lilypond-musicxml/51d-EmptyTitle.png)
### Verovio Humdrum Viewer render
![**VHV could not render: 51d-EmptyTitle.png**](./error.svg),

## 52a-PageLayout.png
<p>Several page layout settings: paper size, margins, system margins and distances, different fonts, etc. </p>

### Unofficial lilypond MusicXML render
![52a-PageLayout.png-lilypond](./lilypond-musicxml/52a-PageLayout.png)
### Verovio Humdrum Viewer render
![52a-PageLayout.png-vhv](./kern-images/52a-PageLayout.png),

## 52b-Breaks.png
<p>System and page breaks, given in a <print> element </p>

### Unofficial lilypond MusicXML render
![52b-Breaks.png-lilypond](./lilypond-musicxml/52b-Breaks.png)
### Verovio Humdrum Viewer render
![52b-Breaks.png-vhv](./kern-images/52b-Breaks.png),

## 61a-Lyrics.png
<p>Some notes with simple lyrics: Syllables, notes without a syllable, syllable spanners. </p>

### Unofficial lilypond MusicXML render
![61a-Lyrics.png-lilypond](./lilypond-musicxml/61a-Lyrics.png)
### Verovio Humdrum Viewer render
![61a-Lyrics.png-vhv](./kern-images/61a-Lyrics.png),

## 61b-MultipleLyrics.png
<p>Multiple (simple) lyrics. The order of the exported stanzas is relevant (identified by the number attribute in this test case) </p>

### Unofficial lilypond MusicXML render
![61b-MultipleLyrics.png-lilypond](./lilypond-musicxml/61b-MultipleLyrics.png)
### Verovio Humdrum Viewer render
![61b-MultipleLyrics.png-vhv](./kern-images/61b-MultipleLyrics.png),

## 61c-Lyrics-Pianostaff.png
<p>Lyrics assigned to the voices of a piano staff containing two simple staves. Each staff is assigned exactly one lyrics line. </p>

### Unofficial lilypond MusicXML render
![61c-Lyrics-Pianostaff.png-lilypond](./lilypond-musicxml/61c-Lyrics-Pianostaff.png)
### Verovio Humdrum Viewer render
![61c-Lyrics-Pianostaff.png-vhv](./kern-images/61c-Lyrics-Pianostaff.png),

## 61d-Lyrics-Melisma.png
<p>How to treat lyrics and slurred notes. Normally, a slurred group of notes is assigned only one lyrics syllable. </p>

### Unofficial lilypond MusicXML render
![61d-Lyrics-Melisma.png-lilypond](./lilypond-musicxml/61d-Lyrics-Melisma.png)
### Verovio Humdrum Viewer render
![61d-Lyrics-Melisma.png-vhv](./kern-images/61d-Lyrics-Melisma.png),

## 61e-Lyrics-Chords.png
<p>Assigning lyrics to chorded notes. </p>

### Unofficial lilypond MusicXML render
![61e-Lyrics-Chords.png-lilypond](./lilypond-musicxml/61e-Lyrics-Chords.png)
### Verovio Humdrum Viewer render
![61e-Lyrics-Chords.png-vhv](./kern-images/61e-Lyrics-Chords.png),

## 61f-Lyrics-GracedNotes.png
<p>Grace notes shall not mess up the lyrics, and they shall not be assigned a syllable. </p>

### Unofficial lilypond MusicXML render
![61f-Lyrics-GracedNotes.png-lilypond](./lilypond-musicxml/61f-Lyrics-GracedNotes.png)
### Verovio Humdrum Viewer render
![61f-Lyrics-GracedNotes.png-vhv](./kern-images/61f-Lyrics-GracedNotes.png),

## 61g-Lyrics-NameNumber.png
<p>A lyrics syllable can have both a number and a name attribute. The question is: What should be used to put syllables of the same voice together. This example uses different number/name combinations to check how different applications handle this unspecified case (The advice on the MusicXML mailing list was "there is no correct way, each application can do what it thinks is best"). </p>

### Unofficial lilypond MusicXML render
![61g-Lyrics-NameNumber.png-lilypond](./lilypond-musicxml/61g-Lyrics-NameNumber.png)
### Verovio Humdrum Viewer render
![61g-Lyrics-NameNumber.png-vhv](./kern-images/61g-Lyrics-NameNumber.png),

## 61h-Lyrics-BeamsMelismata.png
<p>Beaming or slurs can indicate melismata for lyrics. Also make sure that notes without an explicit syllable are treated as if they were part of a melisma. </p>

### Unofficial lilypond MusicXML render
![61h-Lyrics-BeamsMelismata.png-lilypond](./lilypond-musicxml/61h-Lyrics-BeamsMelismata.png)
### Verovio Humdrum Viewer render
![61h-Lyrics-BeamsMelismata.png-vhv](./kern-images/61h-Lyrics-BeamsMelismata.png),

## 61i-Lyrics-Chords.png
<p>Each note of a chord can have some lyrics attached. In this case, each note of the chord has lyrics of the form "Lyrics [123]" attached, where each lyrics has a different number attribute to distinguish them. These syllables should be imported into three different stanzas and the timing should be correct. </p>

### Unofficial lilypond MusicXML render
![61i-Lyrics-Chords.png-lilypond](./lilypond-musicxml/61i-Lyrics-Chords.png)
### Verovio Humdrum Viewer render
![61i-Lyrics-Chords.png-vhv](./kern-images/61i-Lyrics-Chords.png),

## 61j-Lyrics-Elisions.png
<p>Multiple lyrics syllables assigned to a single note are implemented either using a space in the lyrics or by using the <elision> lyrics element. This testcase checks both of them. First, a note with on syllable is given, then a note with two syllables separated by a spcae and finally a note with two and one with three syllables implemented using <elision> is given. </p>

### Unofficial lilypond MusicXML render
![61j-Lyrics-Elisions.png-lilypond](./lilypond-musicxml/61j-Lyrics-Elisions.png)
### Verovio Humdrum Viewer render
![61j-Lyrics-Elisions.png-vhv](./kern-images/61j-Lyrics-Elisions.png),

## 61k-Lyrics-SpannersExtenders.png
<p>Lyrics spanners: continued syllables and extenders, possibly spanning multiple notes. The intermediate notes do not have any <lyric> element. </p>

### Unofficial lilypond MusicXML render
![61k-Lyrics-SpannersExtenders.png-lilypond](./lilypond-musicxml/61k-Lyrics-SpannersExtenders.png)
### Verovio Humdrum Viewer render
![61k-Lyrics-SpannersExtenders.png-vhv](./kern-images/61k-Lyrics-SpannersExtenders.png),

## 71a-Chordnames.png
<p>A normal staff with several (complex) chord names displayed. </p>

### Unofficial lilypond MusicXML render
![71a-Chordnames.png-lilypond](./lilypond-musicxml/71a-Chordnames.png)
### Verovio Humdrum Viewer render
![71a-Chordnames.png-vhv](./kern-images/71a-Chordnames.png),

## 71c-ChordsFrets.png
<p>A staff with chord names and some fretboards shown. The fretboards can have an arbitrary number of frets/strings, can start at an arbitrary fret and can even contain fingering information. </p>

### Unofficial lilypond MusicXML render
![71c-ChordsFrets.png-lilypond](./lilypond-musicxml/71c-ChordsFrets.png)
### Verovio Humdrum Viewer render
![71c-ChordsFrets.png-vhv](./kern-images/71c-ChordsFrets.png),

## 71d-ChordsFrets-Multistaff.png
<p>Chords and fretboards assigned to the voices in a multi-voice, multi-staff part. There should be fret diagrams above each of the two staves. </p>

### Unofficial lilypond MusicXML render
![71d-ChordsFrets-Multistaff.png-lilypond](./lilypond-musicxml/71d-ChordsFrets-Multistaff.png)
### Verovio Humdrum Viewer render
![71d-ChordsFrets-Multistaff.png-vhv](./kern-images/71d-ChordsFrets-Multistaff.png),

## 71e-TabStaves.png
<p>Some tablature staves, with explicit fingering information and different string tunings given in the MusicXML file. </p>

### Unofficial lilypond MusicXML render
![71e-TabStaves.png-lilypond](./lilypond-musicxml/71e-TabStaves.png)
### Verovio Humdrum Viewer render
![71e-TabStaves.png-vhv](./kern-images/71e-TabStaves.png),

## 71f-AllChordTypes.png
<p>All chord types defined in MusicXML. The staff will only contain one c’ note (NO chord) for all of them, but the chord names should be properly printed. </p>

### Unofficial lilypond MusicXML render
![71f-AllChordTypes.png-lilypond](./lilypond-musicxml/71f-AllChordTypes.png)
### Verovio Humdrum Viewer render
![71f-AllChordTypes.png-vhv](./kern-images/71f-AllChordTypes.png),

## 71g-MultipleChordnames.png
<p>There can be multiple subsequent harmony elements, indicating a harmony change during a note </p>

### Unofficial lilypond MusicXML render
![71g-MultipleChordnames.png-lilypond](./lilypond-musicxml/71g-MultipleChordnames.png)
### Verovio Humdrum Viewer render
![71g-MultipleChordnames.png-vhv](./kern-images/71g-MultipleChordnames.png),

## 72a-TransposingInstruments.png
<p>Transposing instruments: Trumpet in Bb, Horn in Eb, Piano; All of them show the C major scale (the trumpet with 2 sharp, the horn with 3 sharp). </p>

### Unofficial lilypond MusicXML render
![72a-TransposingInstruments.png-lilypond](./lilypond-musicxml/72a-TransposingInstruments.png)
### Verovio Humdrum Viewer render
![72a-TransposingInstruments.png-vhv](./kern-images/72a-TransposingInstruments.png),

## 72b-TransposingInstruments-Full.png
<p>Various transposition. Each part plays a c”, just displayed in different display pitches. The second-to-last staff uses a transposition where the displayed c’ is an actual f”’ concert pitch. The final staff is an untransposed instrument. </p>

### Unofficial lilypond MusicXML render
![72b-TransposingInstruments-Full.png-lilypond](./lilypond-musicxml/72b-TransposingInstruments-Full.png)
### Verovio Humdrum Viewer render
![72b-TransposingInstruments-Full.png-vhv](./kern-images/72b-TransposingInstruments-Full.png),

## 72c-TransposingInstruments-Change.png
<p>The whole piece is in Bb major (sounding), so first the key signature should be one flat, after the change it should have no accidentals. </p>

### Unofficial lilypond MusicXML render
![72c-TransposingInstruments-Change.png-lilypond](./lilypond-musicxml/72c-TransposingInstruments-Change.png)
### Verovio Humdrum Viewer render
![72c-TransposingInstruments-Change.png-vhv](./kern-images/72c-TransposingInstruments-Change.png),

## 73a-Percussion.png
<p>Three types of percussion staves: A five-line staff with bass clef for Timpani, a five-line staff with percussion clef, and a one-line percussion staff with only unpitched notes. </p>

### Unofficial lilypond MusicXML render
![73a-Percussion.png-lilypond](./lilypond-musicxml/73a-Percussion.png)
### Verovio Humdrum Viewer render
![73a-Percussion.png-vhv](./kern-images/73a-Percussion.png),

## 74a-FiguredBass.png
<p>Note that this file does not contain any extenders! </p>

### Unofficial lilypond MusicXML render
![74a-FiguredBass.png-lilypond](./lilypond-musicxml/74a-FiguredBass.png)
### Verovio Humdrum Viewer render
![**VHV could not render: 74a-FiguredBass.png**](./error.svg),

## 75a-AccordionRegistrations.png
<p>All possible accordion registrations. </p>

### Unofficial lilypond MusicXML render
![75a-AccordionRegistrations.png-lilypond](./lilypond-musicxml/75a-AccordionRegistrations.png)
### Verovio Humdrum Viewer render
![75a-AccordionRegistrations.png-vhv](./kern-images/75a-AccordionRegistrations.png),

## 90a-Compressed-MusicXML.mxl
<p>A compressed MusicXML file, containing a simple MusicXML score and the corresponding .pdf output for reference. </p>

### Unofficial lilypond MusicXML render
![90a-Compressed-MusicXML.mxl-lilypond](./lilypond-musicxml/90a-Compressed-MusicXML.mxl)
### Verovio Humdrum Viewer render
![**VHV could not render: 90a-Compressed-MusicXML.mxl**](./error.svg),

## 99a-Sibelius5-IgnoreBeaming.png
<p>Dolet 3 for Sibelius (5.1) did not print out any closing beam tags, only starting and continuing beam tags. For such files, one either needs to ignore all beaming information or close all beams </p>

### Unofficial lilypond MusicXML render
![99a-Sibelius5-IgnoreBeaming.png-lilypond](./lilypond-musicxml/99a-Sibelius5-IgnoreBeaming.png)
### Verovio Humdrum Viewer render
![99a-Sibelius5-IgnoreBeaming.png-vhv](./kern-images/99a-Sibelius5-IgnoreBeaming.png),

## 99b-Lyrics-BeamsMelismata-IgnoreBeams.png
<p>If we properly ignore all beaming information from the Dolet 3 for Sibelius export file, make sure that the lyrics syllables are still assigned to the correct notes. </p>

### Unofficial lilypond MusicXML render
![99b-Lyrics-BeamsMelismata-IgnoreBeams.png-lilypond](./lilypond-musicxml/99b-Lyrics-BeamsMelismata-IgnoreBeams.png)
### Verovio Humdrum Viewer render
![99b-Lyrics-BeamsMelismata-IgnoreBeams.png-vhv](./kern-images/99b-Lyrics-BeamsMelismata-IgnoreBeams.png)