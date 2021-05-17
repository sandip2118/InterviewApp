import color from './colors';
import font from './fonts';
export default commonStyle = {
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerText: { ...font.fs16SB, color: color.black },
    fs14RB: { ...font.fs14, color: color.black },
    fs10RB: { ...font.fs10, color: color.black },
    // ----- margin -----
    m5: { margin: 5 },
    m10: { margin: 10 },
    m15: { margin: 15 },
    m20: { margin: 20 },
    mh5: { marginHorizontal: 5 },
    mh20: { marginHorizontal: 20 },
    mh10: { marginHorizontal: 10 },
    mh15: { marginHorizontal: 15 },
    mv5: { marginVertical: 5 },
    mv10: { marginVertical: 10 },
    mv15: { marginVertical: 15 },
    mv20: { marginVertical: 20 },
    mv30: { marginVertical: 30 },
    mr20: { marginRight: 20 },
    mr10: { marginRight: 10 },
    mr5: { marginRight: 5 },
    mt5: { marginTop: 5 },
    mt10: { marginTop: 10 },
    mt15: { marginTop: 15 },
    mt20: { marginTop: 20 },
    mt30: { marginTop: 30 },
    mt50: { marginTop: 50 },
    ml5: { marginLeft: 5 },
    ml10: { marginLeft: 10 },
    ml20: { marginLeft: 20 },
    mr10: { marginRight: 10 },
    mr15: { marginRight: 15 },
    mb5: { marginBottom: 5 },
    mb10: { marginBottom: 10 },
    mb15: { marginBottom: 15 },
    mb20: { marginBottom: 20 },
    mb30: { marginBottom: 30 },
    // ----- padding -----
    p5: { padding: 5 },
    p3: { padding: 3 },
    p10: { padding: 10 },
    p20: { padding: 20 },
    p30: { padding: 20 },
    p15: { padding: 15 },
    ph3: { paddingHorizontal: 3 },
    ph5: { paddingHorizontal: 5 },
    ph10: { paddingHorizontal: 10 },
    ph15: { paddingHorizontal: 15 },
    pv5: { paddingVertical: 5 },
    pv3: { paddingVertical: 3 },
    pv10: { paddingVertical: 10 },
    pv15: { paddingVertical: 15 },
    pv20: { paddingVertical: 20 },
    pv30: { paddingVertical: 30 },
    ph10: { paddingHorizontal: 10 },
    ph20: { paddingHorizontal: 20 },
    pt5: { paddingTop: 5 },
    pt10: { paddingTop: 10 },
    pt20: { paddingTop: 20 },
    pb5: { paddingBottom: 5 },
    pb10: { paddingBottom: 10 },
    pb20: { paddingBottom: 20 },
    pb30: { paddingBottom: 30 },
    pl5: { paddingLeft: 5 },
    pl10: { paddingLeft: 10 },
    pl15: { paddingLeft: 15 },
    pl20: { paddingLeft: 20 },
    pl40: { paddingLeft: 40 },
    pl50: { paddingLeft: 50 },
    // ---------- ----------
    // ---------- ----------
    flex: {
        flex: 1
    },
    fdRow: {
        flexDirection: 'row'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    jc: {
        justifyContent: 'center'
    },
    ac: {
        alignItems: 'center'
    },
    shadow: {
        shadowOffset: { width: 0, height: 0 },
        shadowColor: "rgba(0,0,0,1)",
        shadowRadius: 5,
        shadowOpacity: 0.2,
        elevation: 3
    },
}
